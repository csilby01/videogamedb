<!-- Homepage -->
<script>
    import Navbar from '../lib/Navbar.svelte';
    import Review from '../lib/Review.svelte';
    import { Carousel } from 'flowbite-svelte';
    import { scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import game1 from '$lib/images/game1_placeholder.png';
    import game2 from '$lib/images/game2_placeholder.png';
    import game3 from '$lib/images/game3_placeholder.png';

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
            alt: 'game 2',
            src: game3,
            title: 'game2'
        }
    ]

    const scaleAnimation = (x) => scale (x, {duration: 500, easing: quintOut });
</script>

<Navbar/>

<div class="flex flex-row justify-center items-center border border-slate-200 shadow-md rounded-lg mx-28 py-9">
   <h1 class="text-5xl self-center whitespace-nowrap font-semibold text-primary-600 dark:text-primary-500">Video Game DB</h1>
</div>

<div class="grid grid-cols-5 gap-2 my-10">
    <div class='col-span-4 grid-rows-2'>
        <div class="row-span-1">
            <div class="flex flex-row justify-center items-center mx-10">
                <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Popular Games</h1>
            </div>
            <div class="max-w-4x1 mx-24 shadow-lg rounded-xl">
                <Carousel {images} transition={scaleAnimation} let:Indicators let:Controls>
                    <a slot="slide" href="/game" target="_blank" let:Slide let:index>
                        <Slide image={images[index]} />
                    </a>
                    <Controls />
                    <Indicators />
                </Carousel>
            </div>
        </div>
        <div class="row-span-1">
            <div class="flex flex-row justify-center items-center mx-10 mt-5">
                <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">New Releases</h1>
            </div>
            <div class="max-w-4x1 mx-24 shadow-lg rounded-xl">
                <Carousel {images} transition={scaleAnimation} let:Indicators let:Controls>
                    <a slot="slide" href="/game" target="_blank" let:Slide let:index>
                        <Slide image={images[index]} />
                    </a>
                    <Controls />
                    <Indicators />
                </Carousel>
            </div> 
        </div>       
    </div>
    <div class="top_3_games_layout col-span-1 border border-slate-200 shadow-md rounded-lg mr-3 pb-3">
        <h1 class="text-2xl text-center font-semibold">Top 3 Games of the Month</h1>
        <div>
            1. Game 1<img src={game1} alt="game 1" class='pb-2'/>
        </div>
        <div>
            2. Game 2<img src={game2} alt="game 1" class='pb-2'/>
        </div>
        <div>
            3. Game 3<img src={game3} alt="game 1" class='pb-2'/>
        </div>
    </div>
</div>

<div class= "mx-24 my-5">
    <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recent Reviews: </h1>
    <Review />
    <Review />
    <Review />
</div>

<style>
    .top_3_games_layout {
        grid-template-rows: minmax(30px, 1fr) 2fr 2fr 2fr;
        align-self: start;
    }
    .top_3_games_layout > :first-child {
        display: flex;
        justify-content: center;
        /* position: sticky; */
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