/** @type {import('./$types').PageServerLoad} */
import { sequelize } from '/src/lib/db/db.js';
import Game from '$lib/models/Game.js';
import Reviews from '$lib/models/Reviews.js';
import User from '$lib/models/User.js';
import { getGameCover } from '../lib/db/utils/getCover.js';

export async function load({locals}) {
    let game;
    let top3Games = [];
    let gameCovers = [];
    let reviews;

    let recentGames;
    let recentCovers=[];

    try {
        let games = await Game.findRecentGames()
        recentGames = games.map(games => games.get({ plain: true }))
    }
    catch (error){
        console.log("failed to get recent games")
    }
    // get top 3 games of the month
    try {
        game = await Game.findByPk(9865);
        top3Games.push(JSON.stringify(game));
    } catch (error){
        console.log("Game not found");
    }
    try {
        game = await Game.findByPk(18531);
        top3Games.push(JSON.stringify(game));
    } catch (error){
        console.log("Game not found");
    }
    try {
        game = await Game.findByPk(112299);
        top3Games.push(JSON.stringify(game));
    } catch (error){
        console.log("Game not found");
    }

    //get games covers
    for (let i = 0; i < top3Games.length; i++){
        game = JSON.parse(top3Games[i])
        try {
            let coverURL = await getGameCover(game.game_photo);
            gameCovers.push(coverURL);
        }catch (error){
            console.log("Failed to get game cover: ", error);
        }
    }
    
    
    for(let i = 0; i < recentGames.length; i++) {
        try {
            let coverURL = await getGameCover(recentGames[i].game_photo);
            recentCovers.push(coverURL);
        } catch (error){
            console.log("Failed to get newCovers: ", error);
        }
    }

    let highGames;
    let highCovers=[];
    try {
        let games = await Game.findTopGames()
        highGames = games.map(games => games.get({ plain: true }))
    }
    catch (error){
        console.log("failed to get high games")
    }

    for(let i = 0; i < highGames.length; i++) {
        try {
            let coverURL = await getGameCover(highGames[i].game_photo);
            highCovers.push(coverURL);
        } catch (error){
            console.log("Failed to get highCovers: ", error);
        }
    }
    // get recent reviews
    try {
        reviews = await Reviews.findAll({
            order: [['updatedAt', 'DESC']],
            limit: 15
        });
    } catch (error){
        console.log("Failed to get reviews: ", error);
    }
    
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
        let game;
        try {
            game = await Game.findByPk(reviews[i].game_id);
            reviews[i]["gamename"] = game.title;
        } catch (error){
            console.log("Failed to get username: ", error);
        }

        // get game cover
        try {
            let coverURL = await getGameCover(game.game_photo);
            reviews[i]["coverURL"] = coverURL;
        } catch (error){
            console.log("Failed to get username: ", error);
        }
    }
    
    const userData = locals.user;
    let user;
    
    try {
        user = await User.findAll({
            where: { email: userData.email}
        });
    } catch (error){
    }
    return {
        post: {
            threeGames: top3Games,
            recentGames,
            recentCovers,
            highGames,
            highCovers,
            covers: gameCovers,
            recentReviews: JSON.stringify(reviews),
            curUser:  user ? JSON.stringify(user[0]) : null
        }
    };
};
