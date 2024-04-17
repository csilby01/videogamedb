import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable(null);

// Initialize the store
function initAuth() {
    const token = localStorage.getItem('jwt');
    isAuthenticated.set(!!token);
    // Optionally, decode the token to get user details
    // user.set(decodeToken(token));
}

initAuth();

// Add more logic as needed to handle user state updates
