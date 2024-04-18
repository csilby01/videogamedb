/** @type {import('./$types').PageServerLoad} */
import { sequelize } from '/src/lib/db/db.js';
import Game from '$lib/models/Game.js';
import { getGameCover } from '../lib/db/utils/getCover.js';

export async function load() {
    let game;
    let top3Games = [];
    let gameCovers = [];

    // get top 3 games of the month
    try {
        game = await Game.findByPk(9866);
        top3Games.push(JSON.stringify(game));
        console.log('Found Game:', game.title);
    } catch (error){
        console.log("Game not found");
    }
    try {
        game = await Game.findByPk(112248);
        top3Games.push(JSON.stringify(game));
        console.log('Found Game:', game.title);
    } catch (error){
        console.log("Game not found");
    }
    try {
        game = await Game.findByPk(18527);
        top3Games.push(JSON.stringify(game));
        console.log('Found Game:', game.title);
    } catch (error){
        console.log("Game not found");
    }

    //get games covers
    for (let i = 0; i < top3Games.length; i++){
        game = JSON.parse(top3Games[i])
        try{
            let coverURL = await getGameCover(game.game_photo);
            gameCovers.push(coverURL);
        }catch (error){
            console.log("Failed to get game cover: ", error);
        }
    }

    return {
        post: {
            threeGames: top3Games,
            covers: gameCovers
        }
    };
};