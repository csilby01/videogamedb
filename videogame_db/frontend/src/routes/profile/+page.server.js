import User from '$lib/models/User.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    let user;
    const { userId } = params;
    try {
        user = await User.findByPk(userId);
        console.log('Found User:', user.username);
    } catch (error){
        console.log("User not found");
    }
    return {
        post:{
            user: JSON.stringify(user)
        }
    };
};