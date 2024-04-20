import { sequelize } from '/src/lib/db/db.js';
import { getGameCover } from '../../../lib/db/utils/getCover';
import Game from '$lib/models/Game.js';
import Reviews from '$lib/models/Reviews.js';
import User from '$lib/models/User.js';
import { getGenresAndThemes } from '../../../lib/db/utils/getGenres';
import { getScreenshot } from '../../../lib/db/utils/getScreenshots';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let game;
    let coverURL;
    let genresthemes;
    let reviews;
    let ratings;
    let screenshots = [];
    const { gameId } = params;

    //get Game from DB
    try {
        game = await Game.findByPk(gameId);
    } catch (error){
        console.log("Game not found");
    }

    //get Game cover from IGDB
    try {
        coverURL = await getGameCover(game.game_photo);
    } catch(error){
        console.log("Game cover not found");
    }

    //get genres and themes from IGDB
    try {
        genresthemes = await getGenresAndThemes();
    } catch(error){
        console.log("Genres and themes not found")
    }

    //get screenshot URLs from IGDB
    let screenshotIDs = JSON.parse(game.screenshots);
    for (let i = 0; i < screenshotIDs.length; i++){
        try {
            let screenshotURL = await getScreenshot(screenshotIDs[i]);
            screenshots.push(screenshotURL);
        } catch(error){
            console.log(`Screenshot ID ${screenshotIDs[i]} not found`);
        }
    }

    //get recent reviews for game
    try {
        reviews = await Reviews.findAll({
            where: { game_id: gameId},
            order: [['updatedAt', 'DESC']],
            limit: 10
        });
    } catch (error){
        console.log("Failed to get reviews: ", error);
    }

    //avg reviews
    try {
        ratings = await Reviews.findAll({
            where: {game_id: gameId},
            attributes: ['rating']
        })
    } catch (error){
        console.log("Failed to get all review ratings: ", error);
    }

    ratings = JSON.stringify(ratings);
    ratings = JSON.parse(ratings);
    let avg_rating = 0;
    for (let i = 0; i < ratings.length; i++) {
        avg_rating += ratings[i].rating;
    }
    avg_rating = (avg_rating / ratings.length).toFixed(2);
   

    // format review data
    reviews = JSON.stringify(reviews);
    reviews = JSON.parse(reviews);
    for (let i = 0; i < reviews.length; i++) {
        // get username
        try {
            let user = await User.findByPk(reviews[i].user_id);
            reviews[i]["username"] = user.username;
        } catch (error){
            console.log("Failed to get username: ", error);
        }

        // get game name
        reviews[i]["gamename"] = game.title;
        // get game cover
        reviews[i]["coverURL"] = coverURL;
    }

    return {
        post: {
            game: JSON.stringify(game),
            cover: coverURL,
            genresAndThemes: JSON.stringify(genresthemes),
            screenshotURLs: screenshots,
            recentReviews: JSON.stringify(reviews),
            avgrating: avg_rating
        }
    };
}