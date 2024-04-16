import { sequelize } from '/src/lib/db/db.js';
import { getGameCover } from '../../../lib/db/utils/getCover';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { gameId } = params;
    console.log("Fetching game with ID:", gameId);
    try {
        const game = await sequelize.models.Game.findByPk(gameId);
        console.log('Found Game:', game.title);

        const coverURL = await getGameCover(game.game_photo);

        return {
            post: {
                game: JSON.stringify(game),
                cover: coverURL
            }
        };
    } catch (error){
        console.log("Game not found");
    }
}