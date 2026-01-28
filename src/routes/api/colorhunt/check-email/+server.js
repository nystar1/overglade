import { json } from '@sveltejs/kit';
import { colorhuntTable } from '$lib/server/airtable';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { email } = await request.json();

		const records = await colorhuntTable
			.select({
				filterByFormula: `{email} = "${email}"`,
				maxRecords: 1
			})
			.firstPage();

		if (records.length === 0) {
			return json({ found: false });
		}

		const record = records[0];
		const images = record.get('images') || [];

		return json({
			found: true,
			recordId: record.id,
			name: record.get('name'),
			color: record.get('color'),
			images: images.map((/** @type {{ url: string; id: string }} */ img) => ({
				url: img.url,
				id: img.id
			}))
		});
	} catch (error) {
		console.error('Error checking email:', error);
		return json({ error: 'Failed to check email' }, { status: 500 });
	}
}
