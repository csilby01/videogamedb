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
</div>
<p class="mx-10">Showing search results for: <span class="text-yellow-400 font-bold">{query}</span></p>
<div class= "mx-10 my-5">
    <h1 class="self-center whitespace-nowrap text-xl font-bold dark:text-white">Games: </h1>
    {#each data.props.games as game, i}
    <a href="/game/{game.game_id}">
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
    <h1 class="self-center whitespace-nowrap text-xl font-bold dark:text-white">Users: </h1>
    {#each data.props.users as user}
        <div class="grid grid-cols-5">
            <a href="/profile/{user.user_id}">
                <div class = "col-span-1 mx-10 my-3 text-xl font-normal border border-slate-200 shadow-md rounded-lg flex items-center justify-left px-1">
                    <span class="text-yellow-600 font-semibold mx-2">{user.username}</span> - {user.firstName}
                </div>
            </a>
        </div>
    {/each}
</div>
