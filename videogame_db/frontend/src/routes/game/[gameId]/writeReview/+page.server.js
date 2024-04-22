import { sequelize } from '/src/lib/db/db.js';
import { getGameCover } from '../../../../lib/db/utils/getCover';
import Game from '$lib/models/Game.js';
import User from '$lib/models/User.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals}) {
    let game;
    let coverURL;
    const { gameId } = params;

    // get Game from DB
    try {
        game = await Game.findByPk(gameId);
    } catch (error){
        console.log("Game not found");
    }

    //get Game cover from IGDB
    try{
        coverURL = await getGameCover(game.game_photo);
    } catch(error){
        console.log("Game cover not found");
    }

    const userData = locals.user;
    let user;
    try {
        user = await User.findAll({
            where: { email: userData.email}
        });
    } catch (error){
        console.log("Failed to get user");
    }

    return {
        post: {
            game: JSON.stringify(game),
            cover: coverURL,
            curUser: user ? JSON.stringify(user[0]) : null
        }
    };
}