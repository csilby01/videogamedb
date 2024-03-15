const clientID = import.meta.env.VITE_IGDB_CLIENT_ID
const clientSecret = import.meta.env.VITE_IGDB_CLIENT_SECRET

async function getClientCredentialsToken() {
    const params = new URLSearchParams();
    params.append('client_id', clientID);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');

    const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
    });

    if (!response.ok) {
        throw new Error(`Failed to get token: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

let tokenCache = {
    accessToken: null,
    expiry: null,
};

export async function getAccessToken() {
    const now = new Date();

    if (!tokenCache.accessToken || now >= tokenCache.expiry){
        const response = await getClientCredentialsToken()
        const accessToken = response.access_token;
        const expiresIn = response.expires_in;

        tokenCache = {
            accessToken,
            expiry: new Date(now.getTime() + expiresIn * 1000)
        };

        console.log(tokenCache);
        return tokenCache.accessToken;
    }
    
    return tokenCache.accessToken;
}