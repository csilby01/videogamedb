import Users from '$lib/models/Users';
import { generateToken } from '$lib/auth';

export async function post({ request }) {
    const { username, password } = await request.json();

    const user = await Users.findUserByUsername(username);
    if (!user || !user.verifyPassword(password)) {
        return {
            status: 401,
            body: { error: 'Invalid username or password' }
        };
    }

    const token = generateToken(user);
    return {
        status: 200,
        body: { token }
    };
}
