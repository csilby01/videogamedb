import User from '$lib/models/User.js';
import { json } from '@sveltejs/kit';

export async function POST({ request, params }) {
    const { userId } = params;
    const changes = await request.json();
    
    const oldUser = await User.findOne({ user_id: userId });
    try {
        oldUser.firstName = changes.firstName
        oldUser.lastName = changes.lastName

        await oldUser.save()
        return json({success: true, messge: 'Profile edited successfully'});
    } catch (error) {
        return json({success: false, message: error.message }, { status: 500});
    }
}