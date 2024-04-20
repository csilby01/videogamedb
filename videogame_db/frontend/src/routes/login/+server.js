import { redirect, json } from '@sveltejs/kit';
import * as cookie from 'cookie';
import { loginUser } from '$lib/authService.js';

export async function POST({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const token = await loginUser(email, password);
    if (!token) {
        return json({ error: 'Invalid credentials' }, { status: 401 });
    }
    if (token) {
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Set-Cookie': `auth=${token}; Path=/; HttpOnly; SameSite=Strict`,
                // Add `; Secure` if you're using HTTPS in production
            }
        });
    }

    if (!request.locals) {
        request.locals = {};  // Safeguard: initialize if not already initialized
    }
    
    request.locals.user = { email, token };
    // Generate JWT token and set cookie here...
    const headers = {
        'Set-Cookie': cookie.serialize('auth', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production', // Uncomment in production
        })
    };

    throw redirect(303, '/', headers);
}