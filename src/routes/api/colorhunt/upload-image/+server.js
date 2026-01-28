import { json } from '@sveltejs/kit';
import { colorhuntTable, AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '$lib/server/airtable';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { recordId, cellIndex, imageData, filename, oldImageId } = await request.json();

		// If replacing an image, remove the old one first
		if (oldImageId) {
			const record = await colorhuntTable.find(recordId);
			const currentImages = record.get('images') || [];
			const filteredImages = currentImages.filter(
				(/** @type {{ id: string }} */ img) => img.id !== oldImageId
			);
			await colorhuntTable.update(recordId, {
				images: filteredImages.map((/** @type {{ url: string }} */ img) => ({ url: img.url }))
			});
		}

		// Remove data URL prefix
		const base64Data = imageData.replace(/^data:[^;]+;base64,/, '');

		// Upload using Airtable's content API
		const uploadResponse = await fetch(
			`https://content.airtable.com/v0/${AIRTABLE_BASE_ID}/${recordId}/images/uploadAttachment`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${AIRTABLE_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					contentType: 'image/jpeg',
					file: base64Data,
					filename: filename
				})
			}
		);

		const uploadResult = await uploadResponse.json();

		return json({
			success: true,
			url: uploadResult.url,
			id: uploadResult.id
		});
	} catch (error) {
		console.error('Error uploading image:', error);
		return json({ error: 'Failed to upload image' }, { status: 500 });
	}
}
