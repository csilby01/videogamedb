// src/lib/authService.js

import jwt from 'jsonwebtoken';
import  User  from '/src/lib/models/User.js'; // Update this path to the actual User model location
import bcrypt from 'bcrypt';
import { goto } from '$app/navigation';
const JWT_SECRET = '5d4673d18d28b71dded353d00f8be8ca39918ad8e462d95db29e4a7d0627f1e561731a7b7e08d7fdacb758b95733f44a5e44be6e0af52efa23460673b4c7458c'; // Make sure to use an environment variable in production
const SALT_ROUNDS = 10;
import cookie from 'cookie';

// Make sure to include all fields required by your User model.
export async function registerUser(email, password, username, firstName, lastName) {
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser = await User.create({
            username,
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        return newUser;
    } catch (error) {
        console.error('Error registering new user:', error);
        throw error;
    }
}

export async function loginUser(email, password) {
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return null; // User not found
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null; // Password is incorrect
        }
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        return token;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
}

export function logout() {
    return {
        headers: {
            'Set-Cookie': cookie.serialize('auth', '', {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                expires: new Date(0)  // expire immediately
            })
        }
    };
}

export async function updateUserPassword(userId, newPassword) {
    try {
        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
        const result = await User.update(
            { password: hashedPassword },
            { where: { id: userId } }
        );

        return result[0] > 0; 
    } catch (error) {
        console.error('Error updating user password:', error);
        return false;
    }
}