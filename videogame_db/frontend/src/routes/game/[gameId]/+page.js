import db from '/src/lib/db/db.js';

export async function load({ params }) {
    const { gameId } = params;
    console.log("Fetching game with ID:", gameId);
    try {
        const game = await db.models.Game.findByPk(gameId);
        if (!game){
            throw new Error('Game not found');
        }
        return {
            props: { game }
        };
    } catch (error){
        return {
            status: error.message == 'Game not found' ? 404 : 500,
            error: new Error(error.message === 'Gane not found' ? 'Game not found' : 'Database error')
        };
    }
}