<!-- Homepage -->
<script>
    import Navbar from '../lib/Navbar.svelte';
    import Review from '../lib/Review.svelte';
    import { Carousel } from 'flowbite-svelte';

    export let data;


    const reviews = JSON.parse(data.post.recentReviews);
    const newGames = data.post.recentGames;
    const newCovers= data.post.recentCovers;
    const highGames = data.post.highGames;
    const highCovers = data.post.highCovers;
    let game1 = JSON.parse(data.post.threeGames[0]);
    let game2 = JSON.parse(data.post.threeGames[1]);
    let game3 = JSON.parse(data.post.threeGames[2]);

    let coverURLs = data.post.covers;
    
    const images = [
        {
            alt: 'game 1',
            src: coverURLs[0],
            title: game1.title,
            gameID: game1.game_id
        },
        {
            alt: 'game 2',
            src: coverURLs[1],
            title: game2.title,
            gameID: game2.game_id
        },
        {
            alt: 'game 3',
            src: coverURLs[2],
            title: game3.title,
            gameID: game3.game_id
        }
    ];    
    
    let newImages = [
        {
            alt: newGames[0].title,
            src: newCovers[0],
            title: newGames[0].title,
            gameID: newGames[0].game_id
        },
        {
            alt: newGames[1].title,
            src: newCovers[1],
            title: newGames[1].title,
            gameID: newGames[1].game_id
        },
        {
            alt: newGames[2].title,
            src: newCovers[2],
            title: newGames[2].title,
            gameID: newGames[2].game_id
        }
    ];

    let highImages = [
        {
            alt: highGames[0].title,
            src: highCovers[0],
            title: highGames[0].title,
            gameID: highGames[0].game_id
        },
        {
            alt: highGames[1].title,
            src: highCovers[1],
            title: highGames[1].title,
            gameID: highGames[1].game_id
        },
        {
            alt: highGames[2].title,
            src: highCovers[2],
            title: highGames[2].title,
            gameID: highGames[2].game_id
        }
    ];
    let currUser = data.post.curUser ? JSON.parse(data.post.curUser) : null;
    console.log("NEW USER: ", currUser);
</script>

<div class="sticky top-0 z-50">
    <Navbar userInfo = {currUser}/>
</div>

<div class="flex flex-row justify-center items-center border border-slate-200 shadow-md rounded-lg mx-28 py-9">
   <h1 class="text-5xl self-center whitespace-nowrap font-semibold text-primary-600 dark:text-primary-500">GameGather</h1>
</div>

<div>
</div>

<div class="grid grid-cols-5 min-w-96 gap-2 my-10">
    <div class="col-span-1 min-w-24 mr-3 pb-3">
    </div>
    <div class="top_3_games_layout col-span-1 min-w-24 border border-slate-200 shadow-md rounded-lg mr-3 pb-3">
        <h1 class="text-2xl text-center font-semibold my-5">Highest Rated Games</h1>
        <a href="/game/{highImages[0].gameID}" class="hover:underline">1. {highImages[0].title}<img src={highImages[0].src} alt={highImages[0].alt} class='pb-2'/></a>
        <a href="/game/{highImages[1].gameID}" class="hover:underline">2. {highImages[1].title}<img src={highImages[1].src} alt={highImages[0].alt} class='pb-2'/></a>
        <a href="/game/{highImages[2].gameID}" class="hover:underline">3. {highImages[2].title}<img src={highImages[2].src} alt={highImages[0].alt} class='pb-2'/></a>
    </div>
    <div class="top_3_games_layout col-span-1 min-w-24 border border-slate-200 shadow-md rounded-lg mr-3 pb-3">
        <h1 class="text-2xl text-center font-semibold my-5">Editor's Choice</h1>
        <a href="/game/{images[0].gameID}" class="hover:underline">1. {images[0].title}<img src={images[0].src} alt={images[0].alt} class='pb-2'/></a>
        <a href="/game/{images[1].gameID}" class="hover:underline">2. {images[1].title}<img src={images[1].src} alt={images[0].alt} class='pb-2'/></a>
        <a href="/game/{images[2].gameID}" class="hover:underline">3. {images[2].title}<img src={images[2].src} alt={images[0].alt} class='pb-2'/></a>
    </div>
    <div class="top_3_games_layout col-span-1 min-w-24 border border-slate-200 shadow-md rounded-lg mr-3 pb-3">
        <h1 class="text-2xl text-center font-semibold my-5">Recent Releases</h1>
        <a href="/game/{newImages[0].gameID}" class="hover:underline">1. {newImages[0].title}<img src={newImages[0].src} alt={newImages[0].alt} class='pb-2'/></a>
        <a href="/game/{newImages[1].gameID}" class="hover:underline">2. {newImages[1].title}<img src={newImages[1].src} alt={newImages[0].alt} class='pb-2'/></a>
        <a href="/game/{newImages[2].gameID}" class="hover:underline">3. {newImages[2].title}<img src={newImages[2].src} alt={newImages[0].alt} class='pb-2'/></a>
    </div>
    <div class='col-span-5 grid-rows-2 min-w-72'>
        <div class= "mx-24 my-5">
            <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recent Reviews: </h1>
            {#each reviews as review}
            <div>
                <Review reviewInfo = {review} />
            </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .top_3_games_layout {
        grid-template-rows: minmax(30px, 1fr) 2fr 2fr 2fr;
        align-self: start;
    }
    .top_3_games_layout > :first-child {
        display: flex;
        justify-content: center;
    }
    .top_3_games_layout > div {
        border-bottom-width: 2px;
        --tw-text-opacity: 1;
        border-color: rgb(239 86 47 / var(--tw-text-opacity));
        margin-left: 1.25rem;
        margin-right: 1.25rem;
        padding-top: 0.75rem;
    }
</style>