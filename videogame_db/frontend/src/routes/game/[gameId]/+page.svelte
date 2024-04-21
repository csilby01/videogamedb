<!-- Game Page -->
<script>
	/** @type {import('./$types').PageData} */
    import Navbar from "../../../lib/Navbar.svelte";
	import BarGraph from "../../../lib/BarGraph.svelte";
    import Review from "../../../lib/Review.svelte";
    import { GradientButton, Carousel } from 'flowbite-svelte';
    import { page } from '$app/stores';
    
    const gameId = $page.params.gameId;

    export let data;
    const game = JSON.parse(data.post.game);
    const coverURL = data.post.cover;
    const genresAndThemes = JSON.parse(data.post.genresAndThemes);
    const genres = genresAndThemes["genres"];
    const themes = genresAndThemes["themes"];
    const screenshotURLs = data.post.screenshotURLs;
    const reviews = JSON.parse(data.post.recentReviews);
    const avg_rating = data.post.avgrating;

    let gameGenres = JSON.parse(game.genres);
    let gameThemes = JSON.parse(game.themes);
    let gameGenresAndThemes = [];
    let images = [];

    // get games genre names
    for (let i = 0; i < genres.length; i++){
        for (let j = 0; j < gameGenres.length; j++){
            if (gameGenres[j] == genres[i].id){
                gameGenresAndThemes.push(genres[i].name);
            }
        }
    }

    // get games theme names
    for (let i = 0; i < themes.length; i++){
        for (let j = 0; j < gameThemes.length; j++){
            if (gameThemes[j] == themes[i].id){
                gameGenresAndThemes.push(themes[i].name);
            }
        }
    }
    
    // sort screenshots so carousel can display them
    for (let i = 0; i < screenshotURLs.length; i++){
        images.push({
            alt: `screenshot ${i}`,
            src: screenshotURLs[i],
            title: `screenshot ${i}`
        })
    }

    let currUser = JSON.parse(data.post.curUser);
</script>

<div class="sticky top-0 z-50">
    <Navbar userInfo = {currUser}/>
</div>

<div class="grid grid-cols-7">
    <div class="col-span-2 m-2 p-2 border border-slate-200 shadow-md rounded-lg self-start">
        <img src={coverURL} alt="game 1" class='pb-2'/>
        <h1>{game.release_date.substring(0,10)}</h1>
        {#each gameGenresAndThemes as genre}
            <h1>{genre}</h1>
        {/each}
    </div>
    <div class="col-span-3 m-2">
        <h1 class="text-5xl text-center font-semibold dark:text-white">{game.title}</h1>
        <p class="py-5">{game.description}</p>
        <Carousel {images} let:Indicators let:Controls>
            <Controls />
            <Indicators />
        </Carousel>
    </div>
    <div class="col-span-2 grid grid-rows-1 items-center justify-center pb-1 m-2 border border-slate-200 shadow-md rounded-lg self-start">
        <div class="row-span-1"> 
            <h1 class= " text-2xl text-center font-semibold dark:text-white:">Critic Rating: {game.avg_rating.toFixed(2)}%</h1>
            <h1 class= " text-2xl text-center font-semibold dark:text-white:">Avg Rating: {avg_rating} Stars</h1>
            <BarGraph />
        </div>
        <div class="flex items-center justify-center p-3">
            <GradientButton color="pinkToOrange" href="/game/{gameId}/writeReview">Write a Review!</GradientButton>
        </div>
    </div>
</div>

<div class="grid grid-cols-7">
    <div class="col-span-1 m-2"></div>

    <div class="col-span-5 m-2">
        <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recent Reviews: </h1>
        {#each reviews as review}
            <div>
                <Review reviewInfo = {review} />
            </div>
        {/each}
    </div>

    <div class="col-span-1 m-2"></div>
</div>