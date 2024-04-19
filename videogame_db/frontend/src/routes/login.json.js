import User from '$lib/models/User';
import { generateToken } from '$lib/auth';

export async function post({ request }) {
    const { username, password } = await request.json();

    const user = await User.findUserByUsername(username);
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
