const API_URL = 'http://localhost:5173'; // Adjust the URL based on your actual API URL

export async function login(username, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error('Failed to log in');
    }

    const data = await response.json();
    localStorage.setItem('jwt', data.token); // Stores the JWT in localStorage
    return data;
}

export async function logout() {
    localStorage.removeItem('jwt'); // Removes the JWT from localStorage
}

// Add more functions as necessary, e.g., register, fetchUserProfile, etc.
