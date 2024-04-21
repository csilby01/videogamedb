<!-- Homepage -->
<script>
    import Navbar from '../lib/Navbar.svelte';
    import Review from '../lib/Review.svelte';
    import { Carousel } from 'flowbite-svelte';

    export let data;

    const reviews = JSON.parse(data.post.recentReviews);
    
    let game1 = JSON.parse(data.post.threeGames[0]);
    let game2 = JSON.parse(data.post.threeGames[1]);
    let game3 = JSON.parse(data.post.threeGames[2]);

    let coverURLs = data.post.covers;

    let popCover;
    let newCover;
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

    
    let currUser = JSON.parse(data.post.curUser);
    console.log("NEW USER: ", currUser);
</script>

<div class="sticky top-0 z-50">
    <Navbar userInfo = {currUser}/>
</div>

<div class="flex flex-row justify-center items-center border border-slate-200 shadow-md rounded-lg mx-28 py-9">
   <h1 class="text-5xl self-center whitespace-nowrap font-semibold text-primary-600 dark:text-primary-500">GameGather</h1>
</div>

<div>
    <h1>Hello, {currUser.username}</h1>
</div>

<div class="grid grid-cols-5 min-w-96 gap-2 my-10">
    <div class='col-span-4 grid-rows-2 min-w-72'>
        <div class="row-span-1 flex flex-row justify-center items-center">
            <div class="max-w-4xl min-w-36 w-6/12 mx-24 shadow-lg rounded-xl">
                <h1 class="whitespace-nowrap text-xl font-semibold dark:text-white">Popular Games</h1>
                <Carousel {images} imgClass="object-contain h-full w-fit rounded-sm" let:Indicators let:Controls on:change={({ detail }) => (popCover = detail)}>
                    <Controls class="items-center text-red-400 dark:text-green-400 pt-4"/>
                    <Indicators />
                </Carousel>
                <div class="rounded h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
                    <a href="/game/{popCover?.gameID}" class="hover:underline">{popCover?.title}</a>
                </div>
            </div>
            <div class="max-w-4xl min-w-36 w-6/12 mx-24 shadow-lg rounded-xl">
                <h1 class="whitespace-nowrap text-xl font-semibold dark:text-white">New Releases</h1>
                <Carousel {images} imgClass="object-contain h-full w-fit rounded-sm" let:Indicators let:Controls on:change={({ detail }) => (newCover = detail)}>
                    <Controls class="items-center text-red-400 dark:text-green-400 pt-4" />
                    <Indicators />
                </Carousel>
                <div class="rounded h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
                    <a href="/game/{newCover?.gameID}" class="hover:underline">{newCover?.title}</a>
                </div>
            </div>
        </div> 
        <div class= "mx-24 my-5">
            <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recent Reviews: </h1>
            {#each reviews as review}
            <div>
                <Review reviewInfo = {review} />
            </div>
            {/each}
        </div>
    </div>
    <div class="top_3_games_layout col-span-1 min-w-24 border border-slate-200 shadow-md rounded-lg mr-3 pb-3">
        <h1 class="text-2xl text-center font-semibold">Top 3 Games of the Month</h1>
        <div>
            <a href="/game/{images[0].gameID}" class="hover:underline">1. {images[0].title}<img src={images[0].src} alt={images[0].alt} class='pb-2'/></a>
        </div>
        <div>
            <a href="/game/{images[1].gameID}" class="hover:underline">2. {images[1].title}<img src={images[1].src} alt={images[0].alt} class='pb-2'/></a>
        </div>
        <div>
            <a href="/game/{images[2].gameID}" class="hover:underline">3. {images[2].title}<img src={images[2].src} alt={images[0].alt} class='pb-2'/></a>
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