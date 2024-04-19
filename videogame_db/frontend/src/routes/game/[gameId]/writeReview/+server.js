import Reviews from '$lib/models/Reviews.js';
import { json } from '@sveltejs/kit';

export async function POST({ request, params }) {
    const { gameId } = params;
    const review = await request.json();

    try {
        await Reviews.create({
            game_id: review.gameId,
            user_id: 1,
            platform: review.platform,
            review_text: review.review_text,
            rating: review.rating,
            createdAt: review.currentDate
        });
        return json({success: true, messge: 'Review added successfully'});
    } catch (error) {
        return json({success: false, message: error.message }, { status: 500});
    }
}