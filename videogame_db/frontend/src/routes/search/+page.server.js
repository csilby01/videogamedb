/** @type {import('./$types').PageServerLoad} */
import Game from '$lib/models/Game.js'
import User from '$lib/models/User.js'
import { getGameCover } from '../../lib/db/utils/getCover';
export async function load({url}) {
    const query = url.searchParams.get('query');
    const game = await Game.findBySearch(query);
    const games = game.map(game => game.get({ plain: true }))
    const user = await User.findBySearch(query);
    const users = user.map(user => user.get({ plain: true }))

    const covers = [];
    for (let i = 0; i < games.length; i++){
        covers.push(await getGameCover(game[i].game_photo))
    }
    console.log(covers)
    return {
        props: {
            games,
            covers,
            users
        }
    }
};