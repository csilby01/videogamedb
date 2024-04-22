<script>
    import { Avatar, P, TextPlaceholder } from 'flowbite-svelte';
    import pfp from '$lib/images/pfp_placeholder.jpg';

    export let reviewInfo;

</script>

{#if reviewInfo}
<div class="review_layout border border-slate-200 shadow-md rounded-lg my-3 p-3">
    <div class="col_1">
        <h1 class="row-span-1"><a href="/game/{reviewInfo.game_id}" class="hover:underline">{reviewInfo.gamename}</a></h1>
        <a href="/game/{reviewInfo.game_id}"><img src={reviewInfo.coverURL} alt="game1" class="row-span-1"/></a>
    </div>
    <div class="col_2 mx-3">
        <div class="row-span-1">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <a href="/profile"><Avatar src={pfp} /></a>
                <div class="space-y-1">
                    <div><P><strong><a href="/profile/{reviewInfo.user_id}" class="hover:underline">{reviewInfo.username}</a></strong> played <strong><a href="/game/{reviewInfo.game_id}" class="hover:underline">{reviewInfo.gamename}</a></strong></P></div>
                </div>
            </div>
        </div>
        <div class="row-span-1 mt-5 mx-5">
            <p>{reviewInfo.review_text}</p>
        </div>
    </div>
    <div class="col_3">
        {reviewInfo.rating} <span class = "text-yellow-400 text-xl">★</span>
    </div>
</div>
{:else}
<p>Loading review information...</p>
{/if}

<style>
    .review_layout{
        display: grid;
        grid-template-columns: minmax(100px, 1fr) minmax(100px, 4fr) minmax(100px, 1fr);
        min-width: 300px;
    }
    .col_1 {
        display:grid;
        grid-template-rows: minmax(30px, 1fr) minmax(100px, 2fr);
    }
    .col_1 > :first-child {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .col_2 {
        display: grid;
        grid-template-rows: 1fr 4fr;
    }
    .col_2 > div {
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
    .col_3 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>