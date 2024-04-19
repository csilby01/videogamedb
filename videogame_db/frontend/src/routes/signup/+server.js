// src/routes/signup/+server.js
import { registerUser } from '$lib/authService';

export async function POST({ request }) {
    const form = await request.formData();
    const firstname = form.get('firstname');
    const lastname = form.get('lastname');
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');

    try {
        // Assuming registerUser handles the creation including hashing the password.
        const user = await registerUser(email, password, username, firstname, lastname);
        
        // If you have other user details to include, consider extending your authService to handle them.
        // E.g., you may need to pass and save firstname, lastname, and username as well.

        // You can return a successful response back to the client.
        return new Response(JSON.stringify({
            status: 'success',
            message: 'User registered successfully',
            user: { id: user.id, username: user.username }
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 201 // HTTP status for created
        });
    } catch (error) {
        // Handle errors such as email already in use, etc.
        console.error("signup error", error);
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 // Internal Server Error or consider 400 for client-related errors
        });
    }
}
