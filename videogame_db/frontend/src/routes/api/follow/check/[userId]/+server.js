import Reviews from '$lib/models/Reviews.js';

export async function GET(request) {
    console.log(request);
    const { userId } = request.params;
    const currUserId = request.url.searchParams.get('currentUserId');

    console.log(`checking if user ${currUserId} is following ${userId}`);
    // try {
    //     const followStatus = await Reviews.findOne({
    //         where: { user_id: currUserId, friend_id: userId }
    //     });
    //     return {
    //         body: {isFollowing: !!followStatus}
    //     };
    // } catch (error) {
    //     console.log('Failed to check following status: ', error);
    // }
}