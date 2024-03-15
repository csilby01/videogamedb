import { getAccessToken } from '$lib/auth';
const clientID = import.meta.env.VITE_IGDB_CLIENT_ID;

export async function GET() {
    try {
        const accessToken = await getAccessToken();
        const response = await fetch('https://api.igdb.com/v4/games/', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: "fields *;"
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error in GET function:', error);
        return {
            status: 500, // Internal Server Error
            body: { error: error.message }
        };
    }
}