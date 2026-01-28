<script>
	let userEmail = '';
	let userRecordId = '';
	/** @type {({url: string, id: string | null} | null)[]} */
	let images = [null, null, null, null, null, null, null, null, null];
	/** @type {number | null} */
	let currentCellIndex = null;
	let showEmailSection = true;
	let emailError = '';
	let userColor = '';

	/** @type {HTMLInputElement} */
	let fileInput;

	async function checkEmail() {
		const email = userEmail.trim();
		if (!email) return;

		emailError = '';

		try {
			const res = await fetch('/api/colorhunt/check-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});

			const data = await res.json();

			if (!data.found) {
				emailError = 'Please use the email you used to register on attend! DM Tongyu if you need help.';
				return;
			}

			userRecordId = data.recordId;
			await loadUserData(data);
		} catch (err) {
			emailError = 'Error checking email. Please try again.';
		}
	}

	/**
	 * @param {{ color?: string, images?: {url: string, id: string}[] }} data
	 */
	async function loadUserData(data) {
		let color = data.color;

		if (!color) {
			const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
			color = colors[Math.floor(Math.random() * colors.length)];

			await fetch('/api/colorhunt/update-color', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ recordId: userRecordId, color })
			});
		}

		userColor = color;

		if (data.images && data.images.length > 0) {
			data.images.forEach((img, i) => {
				if (i < 9) {
					images[i] = { url: img.url, id: img.id };
				}
			});
			images = images; // Trigger Svelte reactivity
		}

		showEmailSection = false;
	}

	/**
	 * @param {number} index
	 */
	function handleCellClick(index) {
		currentCellIndex = index;

		if (images[index] && images[index]?.url) {
			if (confirm('Re-upload picture?')) {
				fileInput.click();
			} else {
				currentCellIndex = null;
			}
		} else {
			fileInput.click();
		}
	}

	/**
	 * @param {File} file
	 * @param {number} maxSize
	 * @param {number} quality
	 * @returns {Promise<string>}
	 */
	function compressImage(file, maxSize = 800, quality = 0.7) {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = (e) => {
				const img = new Image();
				img.onload = () => {
					const canvas = document.createElement('canvas');
					let width = img.width;
					let height = img.height;

					if (width > height && width > maxSize) {
						height = (height * maxSize) / width;
						width = maxSize;
					} else if (height > maxSize) {
						width = (width * maxSize) / height;
						height = maxSize;
					}

					canvas.width = width;
					canvas.height = height;

					const ctx = canvas.getContext('2d');
					ctx?.drawImage(img, 0, 0, width, height);

					const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
					resolve(compressedBase64);
				};
				img.src = /** @type {string} */ (e.target?.result);
			};
			reader.readAsDataURL(file);
		});
	}

	/**
	 * @param {Event} e
	 */
	async function handleFileChange(e) {
		const input = /** @type {HTMLInputElement} */ (e.target);
		const file = input.files?.[0];
		if (!file || currentCellIndex === null) return;

		const cellIndexToUpdate = currentCellIndex;
		const oldImageId = images[cellIndexToUpdate]?.id || null;

		try {
			const compressedBase64 = await compressImage(file);

			// Show immediately locally
			images[cellIndexToUpdate] = { url: compressedBase64, id: null };
			images = images; // Trigger reactivity

			// Upload to Airtable in background
			const res = await fetch('/api/colorhunt/upload-image', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					recordId: userRecordId,
					cellIndex: cellIndexToUpdate,
					imageData: compressedBase64,
					filename: file.name.replace(/\.[^.]+$/, '.jpg'),
					oldImageId: oldImageId
				})
			});

			const data = await res.json();

			if (data.success) {
				images[cellIndexToUpdate] = { url: data.url || compressedBase64, id: data.id };
				images = images; // Trigger reactivity
			} else {
				alert('Upload to server failed. Image shown locally but may not be saved.');
			}
		} catch (err) {
			console.error('Upload failed:', err);
			alert('Upload failed. Please try again.');
		}

		currentCellIndex = null;
		input.value = '';
	}

</script>

<div class="container">
	{#if showEmailSection}
		<h1>Color Hunt</h1>
		<div class="email-form">
			<input
				type="email"
				bind:value={userEmail}
				placeholder="Enter your email"
				onkeydown={(e) => e.key === 'Enter' && checkEmail()}
			/>
			<button onclick={checkEmail}>Submit</button>
		</div>
		{#if emailError}
			<p class="error">{emailError}</p>
		{/if}
	{:else}
		<h1>Color Hunt</h1>
		<div class="color-badge" style="background-color: {userColor};">
			{userColor}
		</div>
		<p class="explanation">
			To build a rainbow bridge, we have to collect the parts... your assigned part is <strong>{userColor}</strong>. Take 9 photos around Singapore of <strong>{userColor}</strong> items and upload them here. Upon success, receive a coin from the Glademasters once we get to the Overglade!
		</p>
		<div class="grid">
			{#each images as image, i}
				<button class="grid-cell" onclick={() => handleCellClick(i)}>
					{#if image}
						<img src={image.url} alt="Uploaded image {i + 1}" />
					{:else}
						<span class="plus">+</span>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

<input
	type="file"
	accept="image/*"
	style="display: none;"
	bind:this={fileInput}
	onchange={handleFileChange}
/>

<style>
	.container {
		padding: 20px;
		max-width: 500px;
		margin: 0 auto;
		color: white;
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
		color: #D2FFD6;
	}

	.email-form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.email-form input {
		padding: 12px 16px;
		font-size: 16px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 8px;
		width: 100%;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.1);
		color: white;
	}

	.email-form input::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	.email-form button {
		padding: 12px 24px;
		font-size: 16px;
		background: #B0FAB6;
		color: #123B49;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: bold;
	}

	.email-form button:hover {
		background: #9ae8a0;
	}

	.error {
		color: #ff6b6b;
		text-align: center;
		margin-top: 10px;
	}

	.color-badge {
		display: block;
		padding: 12px 24px;
		border-radius: 8px;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
		margin: 0 auto;
		text-align: center;
		width: fit-content;
	}

	.explanation {
		margin: 16px 0 24px;
		text-align: center;
		color: rgba(255, 255, 255, 0.85);
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.explanation strong {
		color: #D2FFD6;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
		width: 100%;
	}

	.grid-cell {
		aspect-ratio: 1;
		width: 100%;
		border: 2px dashed rgba(255, 255, 255, 0.3);
		border-radius: 8px;
		cursor: pointer;
		padding: 0;
		background: rgba(255, 255, 255, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.grid-cell:hover {
		border-color: rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.1);
	}

	.grid-cell .plus {
		font-size: 2rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.grid-cell img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 400px) {
		.container {
			padding: 16px;
		}

		.color-badge {
			font-size: 1.25rem;
			padding: 10px 20px;
		}

		.explanation {
			font-size: 0.9rem;
		}

		.grid {
			gap: 6px;
		}
	}
</style>
