import Airtable from 'airtable';
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '$env/static/private';

// Airtable setup
const airtableBase = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
export const colorhuntTable = airtableBase('Colorhunt');

export { AIRTABLE_API_KEY, AIRTABLE_BASE_ID };
