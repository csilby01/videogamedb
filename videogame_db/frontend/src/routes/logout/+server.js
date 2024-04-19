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
                secure: process.env.NODE_ENV === 'production',
                expires: new Date(0)  // expire immediately
            })
        }
    });
}
