import User from '$lib/models/User.js';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;

export async function POST({ request, params }) {
    const { userId } = params;
    const changes = await request.json();
    console.log("HELLO MY FRIENDS: ", userId)
    const oldUser = await User.findOne(
        { where:{
                user_id: userId 
        }});
    try {
        const hashedPassword = await bcrypt.hash(changes.password, SALT_ROUNDS);
        oldUser.firstName = changes.firstName;
        oldUser.lastName = changes.lastName;
        oldUser.password = hashedPassword;

        await oldUser.save()
        return json({success: true, messge: 'Profile edited successfully'});
    } catch (error) {
        return json({success: false, message: error.message }, { status: 500});
    }
}