import Game from '/src/lib/models/Game.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { gameId } = params;
    console.log("Fetching game with ID:", gameId);
    console.log("From: ", Game);
    try {
        return {
            post: await Game.findByPk(gameId)
        };
    } catch (error){
        console.log("Game not found");
    }
}