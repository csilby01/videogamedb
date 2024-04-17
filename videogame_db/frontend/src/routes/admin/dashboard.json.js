import { verifyToken } from '$lib/auth';

export async function get({ headers }) {
    try {
        const token = headers.authorization?.split(' ')[1] || '';
        const decoded = verifyToken(token);

        if (decoded.role !== 'admin') {
            return { status: 403, body: { error: 'Access denied' } };
        }

        return {
            status: 200,
            body: { message: 'Welcome to the admin dashboard' }
        };
    } catch (error) {
        return { status: 401, body: { error: 'Invalid token' } };
    }
}
