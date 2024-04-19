import User from '$lib/models/User.js';
import Game from '$lib/models/Game.js';
import Reviews from '$lib/models/Reviews.js';
import { getGameCover } from '$lib/db/utils/getCover.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    let user;
    let game;
    let reviews;
    const { userId } = params;
    try {
        user = await User.findByPk(userId);
        console.log('Found User:', user.username);
    } catch (error){
        console.log("User not found");
    }

    //get recent reviews for game
    try {
        reviews = await Reviews.findAll({
            where: { user_id: userId},
            order: [['updatedAt', 'DESC']],
            limit: 5
        });
    } catch (error){
        console.log("Failed to get reviews: ", error);
    }

    // format review data
    reviews = JSON.stringify(reviews);
    reviews = JSON.parse(reviews);
    for (let i = 0; i < reviews.length; i++) {
        // get game name
        try {
            game = await Game.findByPk(reviews[i].game_id);
            reviews[i]["gamename"] = game.title;
        } catch (error){
            console.log("Failed to get game title: ", error);
        }

        // get user name
        reviews[i]["username"] = user.username;

        // get game cover
        try {
            let coverURL = await getGameCover(game.game_photo);
            reviews[i]["coverURL"] = coverURL;
        } catch (error){
            console.log("Failed to get username: ", error);
        }
    }

    return {
        post:{
            user: JSON.stringify(user),
            recentReviews: JSON.stringify(reviews)
        }
    };
};