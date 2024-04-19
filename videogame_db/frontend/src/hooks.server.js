import * as cookie from 'cookie';
import { verifyToken } from '$lib/authService';

export async function handle({ event, resolve }) {
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    event.locals.user = cookies.auth ? await verifyToken(cookies.auth) : null;

    const response = await resolve(event);
    if (event.locals.user) {
        response.headers['set-cookie'] = `user=${JSON.stringify(event.locals.user)}; Path=/; HttpOnly`;
    }

    return response;
}