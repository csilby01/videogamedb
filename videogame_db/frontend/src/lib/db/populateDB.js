//NOTE: Game description will be  IGDB's 'storyline' variable. If that's not
// available, then we'll make it IGDB's 'summary' variable. If that's not
// available, then we'll leave it empty. Put a placeholder?

//NOTE: IGDB uses Unix Timestamp's to store release dates. We need to translate this to a date.

//NOTE: game_photo is a reference ID to call /cover endpoint in IGDB

// fields id, name, storyline, summary, first_release_date, cover, aggregated_rating;
import { Sequelize } from 'sequelize';
import Game from '../models/Game.js';
import { getAccessToken } from '../auth.js';

const clientID = "i8yidst2mhp5rcokctxnlkasfidnxg";

// Get games from IGDB
async function getGames(){
    try {
        const accessToken = await getAccessToken();
        const response = await fetch('https://api.igdb.com/v4/games/', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: 'fields id, name, storyline, summary, first_release_date, cover, aggregated_rating; search "Outer Wilds";'
        });
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        //return JSON.stringify(data);  
        return data;
    } catch (error) {
        console.error('Error in GET function:', error);
    }
}

getGames().then(data => {
    console.log(data[0]);
})

function placeGamesIntoDB() {
    
}