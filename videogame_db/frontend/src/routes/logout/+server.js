// src/routes/logout/+server.js
import { redirect } from '@sveltejs/kit';
import * as cookie from 'cookie';

export async function GET({ locals }) {
    // Clear the session
    locals.session.data = {};

    return redirect(302, '/', {
        headers: {
            'Set-Cookie': cookie.serialize('session', '', {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date(0)  // expire immediately
            })
        }
    });
}
import { redirect } from '@sveltejs/kit';
import { logout } from '$lib/authService';

export async function GET() {
    // Use the logout function from authService to get the headers needed to clear the cookie
    const { headers } = logout();

    // Redirect to the homepage or login page after logout
    return new Response(null, {
        status: 302,
        headers: {
            ...headers,
            'Location': '/'
        }
    });
}
