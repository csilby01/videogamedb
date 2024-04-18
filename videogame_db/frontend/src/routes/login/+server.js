import { sequelize } from '/src/lib/db/db.js';
import User from '$lib/models/User.js'

export async function POST({ request }) {
    const form = await request.formData();
    const username = form.get('username');
    const password = form.get('password');
    console.log(form)
    let user;
    try{
        user = await User.findByUsername(username)
        console.log('Found User:', user.username);
    } catch (error){
        console.log("User not found");
    }

    if(user){
        if(user.password = password)
        {
            console.log("success")
        }
    }
}
