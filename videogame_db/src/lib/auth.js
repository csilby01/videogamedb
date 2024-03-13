const clientID = import.meta.env.VITE_IGDB_CLIENT_ID
const clientSecret = import.meta.env.VITE_IGDB_CLIENT_SECRET

async function getClientCredentialsToken() {
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        body: `clientid=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`
    });

    const data = await response.json;
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

        return tokenCache.accessToken;
    }
}