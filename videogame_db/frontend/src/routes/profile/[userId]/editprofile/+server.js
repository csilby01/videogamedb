import User from '$lib/models/User.js';
import { json } from '@sveltejs/kit';

export async function POST({ request, params }) {
    const { userId } = params;
    const changes = await request.json();
    console.log("HELLO MY FRIENDS: ", userId)
    const oldUser = await User.findOne(
        { where:{
                user_id: userId 
        }});
    try {
        oldUser.firstName = changes.firstName;
        oldUser.lastName = changes.lastName;
        oldUser.password = changes.password;

        await oldUser.save()
        return json({success: true, messge: 'Profile edited successfully'});
    } catch (error) {
        return json({success: false, message: error.message }, { status: 500});
    }
}