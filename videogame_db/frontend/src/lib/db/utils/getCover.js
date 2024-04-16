import { getAccessToken } from "./auth";
const clientID = "i8yidst2mhp5rcokctxnlkasfidnxg";

export async function getGameCover(coverID) {
    try {
        const accessToken = await getAccessToken();

        const response = await fetch('https://api.igdb.com/v4/covers', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: `fields url; where id = ${coverID};`
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        let coverURL = await response.json();
        coverURL = coverURL[0]["url"];
        return coverURL.replace('t_thumb', 't_1080p');

    }catch (error) {
        console.error('Error in GET function:', error);
    }
}