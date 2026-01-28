import { json } from '@sveltejs/kit';
import { colorhuntTable } from '$lib/server/airtable';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { recordId, color } = await request.json();

		await colorhuntTable.update(recordId, { color });

		return json({ success: true });
	} catch (error) {
		console.error('Error updating color:', error);
		return json({ error: 'Failed to update color' }, { status: 500 });
	}
}
