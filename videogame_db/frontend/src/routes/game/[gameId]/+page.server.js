import { sequelize } from '/src/lib/db/db.js';
import { getGameCover } from '../../../lib/db/utils/getCover';
import Game from '$lib/models/Game.js'
import { getGenresAndThemes } from '../../../lib/db/utils/getGenres';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let game;
    let coverURL;
    let genresthemes;
    const { gameId } = params;
    console.log("Fetching game with ID:", gameId);

    // get Game from DB
    try {
        game = await Game.findByPk(gameId);
        console.log('Found Game:', game.title);
    } catch (error){
        console.log("Game not found");
    }

    //get Game cover from IGDB
    try{
        coverURL = await getGameCover(game.game_photo);
    } catch(error){
        console.log("Game cover not found");
    }

    //get genres and themes from IGDB
    try{
        genresthemes = await getGenresAndThemes();
    } catch(error){
        console.log("Genres and themes not found")
    }

    return {
        post: {
            game: JSON.stringify(game),
            cover: coverURL,
            genresAndThemes: genresthemes
        }
    };
}