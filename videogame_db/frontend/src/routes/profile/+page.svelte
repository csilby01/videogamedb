<!-- Profile -->
<script>
	import Navbar from "../../lib/Navbar.svelte";
	import game1 from '$lib/images/game1_placeholder.png';
    import game2 from '$lib/images/game2_placeholder.png';
    import game3 from '$lib/images/game3_placeholder.png';
	import BarGraph from "../../lib/BarGraph.svelte";
	import Review from '../../lib/Review.svelte';

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
    <Navbar/>
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
				Name
			</div>
			<div class ="flex items-center my-2">
				Username
			</div>
			<div class ="flex items-center my-2">
				Edit Profile
			</div>
			<div class ="flex items-center my-2">
				Followers: 0
			</div>
			<div class ="flex items-center my-2">
				Following: 0
			</div>
			<div class ="flex items-center my-2">
				Follow
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
    <div>
        <Review />
    </div>
    <div>
        <Review />
    </div>
    <div>
        <Review />
    </div>
</div>