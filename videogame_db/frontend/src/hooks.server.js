import * as cookie from 'cookie';
import { verifyToken } from '$lib/authService';

export async function handle({ event, resolve }) {

    if (!event.locals) {
        event.locals = {};  // Create an empty object if locals is not already initialized
    }
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    try {
        event.locals.user = cookies.auth ? await verifyToken(cookies.auth) : null;
    } catch (error) {
        console.error("Error verifying token:", error);
        event.locals.user = null;
    }

    const response = await resolve(event);
    if (event.locals.user) {
        response.headers['set-cookie'] = `user=${JSON.stringify(event.locals.user)}; Path=/; HttpOnly`;
    }

    return response;
}