import User from '$lib/models/User.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    const { userId } = params;

    // get User from DB
    console.log("Fetching user with ID:", userId);
    const userData = locals.user;
    let curUser;
    
    try {
        curUser = await User.findAll({
            where: { email: userData.email}
        });
    } catch (error){
        console.log("Failed to get user");
    }
    console.log("THIS IS USER FOR EDIT PROFILE: ", curUser)
    return {
        post: {
            user: curUser ? JSON.stringify(curUser[0]) : null
        }
    };
}