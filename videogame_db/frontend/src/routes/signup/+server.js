
import { registerUser } from '$lib/authService';

export async function POST({ request }) {
    const form = await request.formData();
    const firstname = form.get('firstname');
    const lastname = form.get('lastname');
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');

    try {
        const user = await registerUser(email, password, username, firstname, lastname);

        return new Response(JSON.stringify({
            status: 'success',
            message: 'User registered successfully',
            user: { id: user.id, username: user.username }
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 201 
        });
    } catch (error) {
      
        console.error("signup error", error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 
        });
    }
}
