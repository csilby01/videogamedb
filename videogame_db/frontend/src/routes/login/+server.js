import { redirect, json } from '@sveltejs/kit';
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
            
            }
        });
    }

    if (!request.locals) {
        request.locals = {}; // initialize if not initialized
    }
    
    request.locals.user = {email, token };

    throw redirect(303, '/', headers);
}