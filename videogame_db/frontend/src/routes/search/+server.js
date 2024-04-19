import { sequelize } from '/src/lib/db/db.js';
import User from '$lib/models/User.js'
import Game from '$lib/models/Game.js'

export async function GET({ url }) {
    const query = url.searchParams.get('query');
    console.log(query)
    return {
        status: 200,
        body: results
    };
}