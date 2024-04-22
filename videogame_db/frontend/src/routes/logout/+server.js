
import { redirect } from '@sveltejs/kit';
import * as cookie from 'cookie';

export async function GET({ locals }) {

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
    
    const { headers } = logout();

    return new Response(null, {
        status: 302,
        headers: {
            ...headers,
            'Location': '/'
        }
    });
}
