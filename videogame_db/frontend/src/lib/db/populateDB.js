//NOTE: Game description will be  IGDB's 'storyline' variable. If that's not
// available, then we'll make it IGDB's 'summary' variable. If that's not
// available, then we'll leave it empty. Put a placeholder?

//NOTE: IGDB uses Unix Timestamp's to store release dates. We need to translate this to a date.

//NOTE: game_photo is a reference ID to call /cover endpoint in IGDB

import Game from '../models/Game.js';
import { getAccessToken } from './utils/auth.js';

const clientID = "i8yidst2mhp5rcokctxnlkasfidnxg";

// Get games from IGDB
async function getGames(){
    let allGames = [];
    let offset = 0;
    const limit = 500;

    try {
        const accessToken = await getAccessToken();
        while (true){
            const response = await fetch('https://api.igdb.com/v4/games/', {
            method: 'POST',
            headers: {
                'Client-ID': clientID,
                'Authorization': `Bearer ${accessToken}`
            },
            body: `fields id, name, storyline, summary, first_release_date, cover, aggregated_rating, genres, themes, screenshots, videos; where first_release_date != null & cover != null & (summary != null | storyline != null) & version_parent = null & parent_game = null; limit ${limit}; sort id asc; offset ${offset};`
            });
            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }

            const data = await response.json();

            if (data.length === 0){
                break;
            }

            allGames = allGames.concat(data);
            console.log(`Got games ${offset} - ${offset + limit} allGames now contains ${allGames.length} entries`);
            offset += limit;
        }
    } catch (error) {
        console.error('Error in GET function:', error);
    }

    return allGames;
}

async function placeGamesIntoDB() {
    const data = await getGames();
    data.forEach(async (gameData) => {
        try {
            await Game.create({
                title: gameData.name,
                description: gameData.storyline || gameData.summary,
                release_date: new Date(gameData.first_release_date * 1000),
                game_photo: gameData.cover,
                avg_rating: gameData.aggregated_rating || 0.00,
                genres: JSON.stringify(gameData.genres),
                themes: JSON.stringify(gameData.themes),
                screenshots: JSON.stringify(gameData.screenshots),
                videos: JSON.stringify(gameData.videos)
            })
        } catch(error) {
            console.error('Failed to insert game into database:', error);
        }
    });
}

placeGamesIntoDB();