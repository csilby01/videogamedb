import User from '$lib/models/User';

export async function POST({ request }) {
    const form = await request.formData();
    const firstname = form.get('firstname');
    const lastname = form.get('lastname');
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');
    try{
        console.log(form)
        const user = await User.create({
            username,
            firstName: firstname,
            lastName: lastname,
            email,
            password
        });
        // return new Response(JSON.stringify({
        //     status: 'success',
        //     message: 'User registered successfully',
        //     user: { id: user.id, username: user.username }
        // }), {
        //     headers: { 'Content-Type': 'application/json' },
        //     status: 201 // HTTP status for created
        // });
    }
    catch(error) {
        console.log("signup error");
        console.log({ error: error.message })
    }
}