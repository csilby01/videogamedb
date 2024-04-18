import { getAccessToken } from "./auth";
const clientID = "i8yidst2mhp5rcokctxnlkasfidnxg";

export async function getScreenshot(screenshotID) {
    try {
        const accessToken = await getAccessToken();

        const response = await fetch('https://api.igdb.com/v4/screenshots', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: `fields url; where id = ${screenshotID};`
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        let screenshotURL = await response.json();
        screenshotURL = screenshotURL[0]["url"];
        return screenshotURL.replace('t_thumb', 't_1080p');

    }catch (error) {
        console.error('Error in GET function:', error);
    }
}