/** @type {import('./$types').PageServerLoad} */
import { sequelize } from '/src/lib/db/db.js';
import Game from '$lib/models/Game.js';

export async function load() {
    let game;
    let top3Games = [];

    // get top 3 games of the month
    game = await Game.findByPk(1);
    try {
        game = await Game.findByPk(1);
        top3Games.push(JSON.stringify(game));
        console.log('Found Game:', game.title);
    } catch (error){
        console.log("Game not found");
    }
    try {
        game = await Game.findByPk(112237);
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

    return {
        post: {
            threeGames: top3Games
        }
    };
};