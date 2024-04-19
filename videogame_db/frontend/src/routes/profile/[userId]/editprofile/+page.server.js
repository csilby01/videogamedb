import User from '$lib/models/User.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { userId } = params;
    let user;

    // get User from DB
    console.log("Fetching user with ID:", userId);
    try {
        user = await User.findByPk(userId);
        console.log('Found User:', user.username);
    } catch (error){
        console.log("User not found");
    }

    return {
        post: {
            user: JSON.stringify(user),
        }
    };
}