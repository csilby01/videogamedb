import { sequelize } from '../db/db.js';
import Game from '../models/Game.js';

async function removeAllGames() {
    try {
        const result = await Game.destroy({
            where: {}
        });
        console.log (`${result} games were deleted from the DB.`);
        await sequelize.close();
    }catch (error){
        console.error("Error while deleting games: ", error);
    }
}

removeAllGames();