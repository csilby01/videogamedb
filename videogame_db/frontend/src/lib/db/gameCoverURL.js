import Game from '../models/Game.js';
import { getAccessToken } from './utils/auth.js';

async function getCover(coverID){
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

async function replaceCovers(){
    const games = await Game.findAll();

    await Promise.all(games.map(async (game) => {
        const coverURL = await getCover(game.game_photo);
        game.game_photo = coverURL;
        await game.save();
    }));
}

replaceCovers();