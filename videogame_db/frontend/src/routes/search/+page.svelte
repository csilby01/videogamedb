<script>
    /** @type {import('./$types').PageData} */
    import Navbar from "../../lib/Navbar.svelte";
    import { page } from '$app/stores';
	import { AdvancedRating } from "flowbite-svelte";
    $: query = $page.url.searchParams.get('query');

    export let data;

</script>

<div class="sticky top-0 z-50">
    <Navbar/>
    <p class="mx-10">Showing search results for: <span class="text-yellow-400 font-bold">{query}</span></p>
</div>
<div class= "mx-10 my-5">
    <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Games: </h1>
    {#each data.props.games as game, i}
    <a href="https://youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
        <div class= "mx-10 my-5 grid grid-cols-6 m-2 p-2 border border-slate-200 shadow-md rounded-lg self-start">
            <div class = "col-span-1 ">
                <img src={data.props.covers[i]} alt="{game.title}" class='h-48 w-32  border border-slate-200 shadow-md rounded-lg m-2'/>
            </div>
            <div class ="col-span-4 mx-2">
                <div class = "flex items-center justify-center text-lg font-bold pb-4">
                    {game.title}
                </div>
                <div>
                    {game.description}
                </div>
            </div>
            <div class="flex flex-col justify-center items-center h-full">
                <div class ="col=span-1 border border-slate-200 shadow-md rounded-lg h-10 flex items-center justify-center w-32">
                    Rating: <span class= "text-yellow-600 font-semibold px-1">{Number(game.avg_rating).toFixed(1)}</span>
                </div>
            </div>
        </div>
    </a>
    {/each}
</div>
