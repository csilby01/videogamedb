import { getAccessToken } from "./auth";
const clientID = "i8yidst2mhp5rcokctxnlkasfidnxg";

export async function getGenresAndThemes() {
    let genresAndThemes;
    let themes;
    let genres;

    // get genres
    try {
        const accessToken = await getAccessToken();

        const response = await fetch('https://api.igdb.com/v4/genres', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: 'fields name; limit 36;'
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        
        genres = await response.json();
    }catch (error) {
        console.error('Error in GET function:', error);
    }


    //get themes
    try {
        const accessToken = await getAccessToken();

        const response = await fetch('https://api.igdb.com/v4/themes', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: 'fields name; limit 50;'
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        
        themes = await response.json();
    }catch (error) {
        console.error('Error in GET function:', error);
    }

    genresAndThemes = {genres, themes};

    return genresAndThemes;
}