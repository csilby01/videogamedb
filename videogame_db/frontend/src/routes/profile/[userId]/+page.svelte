<!-- Profile -->
<script>
	import Navbar from "$lib/Navbar.svelte";
	import game1 from '$lib/images/game1_placeholder.png';
    import game2 from '$lib/images/game2_placeholder.png';
    import game3 from '$lib/images/game3_placeholder.png';
	import Review from "$lib/Review.svelte";
	import BarGraph from "$lib/BarGraph.svelte";
	import FollowButton from "$lib/FollowButton.svelte";
    
    // const userId = $page.params.userId;
	export let data;
	const user = JSON.parse(data.post.user);
	const reviews = JSON.parse(data.post.recentReviews);
	const curUser = JSON.parse(data.post.curUser);

    const images = [
        {
            alt: 'game 1',
            src: game1,
            title: 'game1'
        },
        {
            alt: 'game 2',
            src: game2,
            title: 'game2'
        },
        {
            alt: 'game 3',
            src: game3,
            title: 'game3'
        }
    ]
</script>

<div class="sticky top-0 z-50">
    <Navbar userInfo = {user}/>
</div>

<div class=" mx-24 shadow-lg rounded-md border">
	<div class="grid grid-cols-4 my-4">
		<div /><div />
		<div class = " font-bold flex text-xl items-center justify-center">
			Top 3 Games
		</div>
	</div>
	<div class="grid grid-cols-4 gap-2">
		<div class="shadow-lg col-span-1 mx-5 h-40 w-40 rounded-full flex items-center justify-center bg-gray-100">
			Profile Photo
		</div>
		<div class='col-span-1 grid-rows-4 mx-4'>
			<div>
				<img src={game1} alt="game 1" class='pb-2'/>
			</div>
			<div class="flex items-center justify-center font-semibold">
				Game 1
			</div>
		</div>
		<div class='col-span-1 grid-rows-4 mx-4'>

			<div>
				<img src={game2} alt="game 1" class='pb-2'/>
			</div>
			<div class="flex items-center justify-center font-semibold ">
				Game 2
			</div>
		</div>
		<div class='col-span-1 grid-rows-4 mx-4'>
			<div>
				<img src={game3} alt="game 1" class='pb-2'/>
			</div>
			<div class="flex items-center justify-center font-semibold">
				Game 3
			</div>
		</div>
	</div>
	<div class="grid grid-cols-4 my-8">
		<div class = "col-span-1 mx-10">
			<div class ="flex items-center my-2">
				<span class=" font-semibold">{user.firstName} {user.lastName}</span>
			</div>
			<div class ="flex items-center my-2">
				<span class="text-yellow-600 font-semibold">{user.username}</span>
			</div>
			<div class ="flex items-center my-2">
				{#if user.user_id == curUser.user_id}
				Edit Profile
				{/if}
			</div>
		</div>
		<div class="col-span-3">
			<div>
				<BarGraph />
			</div>
			<div class = "flex items-center justify-center font-semibold">
				Rating
			</div>

		</div>
		
	</div>
</div>
<div class= "mx-24 my-12">
    <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">User's Reviews: </h1>
    {#each reviews as review}
		<div>
			<Review reviewInfo = {review} />
		</div>
    {/each}
</div>