export async function GET({ url }) {
    const query = url.searchParams.get('query');
    console.log(query)
    return {
        status: 200,
        body: results
    };
}