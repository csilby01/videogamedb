import { sequelize } from '/src/lib/db/db.js';
import Game from '/src/lib/models/Game.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { gameId } = params;
    console.log("Fetching game with ID:", gameId);
    try {
        const game = await sequelize.models.Game.findByPk(gameId)
        console.log('Found Game:', game.title);
        return {
            post: JSON.stringify(game)
        };
    } catch (error){
        console.log("Game not found");
    }
}