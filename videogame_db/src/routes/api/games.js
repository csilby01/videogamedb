import { getAccessToken } from '$lib/auth';
const clientID = import.meta.env.VITE_IGDB_CLIENT_ID;

export async function GET() {
    const accessToken = await getAccessToken();
    const response = await fetch('https://api.igdb.com/v4/games/', {
        method: 'POST',
        headers: {
            'Client-ID': clientID,
            'Authorization': `Bearer ${accessToken}`
        }
    });

    const data = await response.json();
    return {
        status: 200,
        body: data
    };
}