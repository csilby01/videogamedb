import jwt from 'jsonwebtoken';
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
const SECRET_KEY = secretKey;  // Use an environment variable in production

export function generateToken(user) {
    return jwt.sign({
        id: user.id,
        username: user.username,
        role: user.role
    }, SECRET_KEY, { expiresIn: '1d' });
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
}
