<!-- Game Page -->
<script>
	/** @type {import('./$types').PageData} */
    import Navbar from "../../../lib/Navbar.svelte";
    import game1 from '$lib/images/game1_placeholder.png';
	import BarGraph from "../../../lib/BarGraph.svelte";
    import Review from "../../../lib/Review.svelte";
    import { TextPlaceholder  } from "flowbite-svelte"; 
    import { GradientButton } from 'flowbite-svelte';
    import { page } from '$app/stores';
	import { onMount } from "svelte";

    const gameId = $page.params.gameId;

    export let data;
    const game = JSON.parse(data.post.game);
    const coverURL = data.post.cover;
  
</script>

<Navbar />

<div class="grid grid-cols-7">
    <div class="col-span-2 m-2 p-2 border border-slate-200 shadow-md rounded-lg self-start">
        <img src={coverURL} alt="game 1" class='pb-2'/>
        <h1>{game.release_date.substring(0,10)}</h1>
        <h1>Genre</h1>
        <h1>Console(s)</h1>
        <h1>Tags</h1>
    </div>
    <div class="col-span-3 m-2">
        <h1 class="text-5xl text-center whitespace-nowrap font-semibold dark:text-white">{game.title}</h1>
        <h1>Summary</h1>
        <p>{game.description}</p>
    </div>
    <div class="col-span-2 grid grid-rows-1 items-center justify-center pb-1 m-2 border border-slate-200 shadow-md rounded-lg self-start">
        <div class="row-span-1"> 
            <h1 class= " text-2xl text-center font-semibold dark:text-white:">Critic Rating: {game.avg_rating}%</h1>
            <h1 class= " text-2xl text-center font-semibold dark:text-white:">Avg Rating: 3.54 Stars</h1>
            <BarGraph />
        </div>
        <div class="flex items-center justify-center p-3">
            <GradientButton color="pinkToOrange">Write a Review!</GradientButton>
        </div>
    </div>
</div>

<div class="grid grid-cols-7">
    <div class="col-span-1 m-2"></div>

    <div class="col-span-5 m-2">
        <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recent Reviews: </h1>
        <Review />
        <Review />
        <Review />
    </div>

    <div class="col-span-1 m-2"></div>
</div>