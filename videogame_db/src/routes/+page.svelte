<!-- Homepage -->
<script>
    import Navbar from './Navbar.svelte';
    import { Carousel } from 'flowbite-svelte';
    import { scale } from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
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

<div class="flex flex-row justify-center items-center bg-sky-800 mx-28 py-9">
   <h1 class="text-5xl">Video Game DB</h1>
</div>

<div class="grid grid-cols-5 gap-2 my-10">
    <div class='col-span-4'>
        <div class="flex flex-row justify-center items-center mx-10">
            <h1>Popular Games</h1>
        </div>
        <div class="max-w-4x1 mx-24">
            <Carousel {images} transition={scaleAnimation} let:Indicators let:Controls>
                <Controls />
                <Indicators />
            </Carousel>
        </div>
    </div>
    <div class="bg-sky-800 content-center">
        <h1 class="text 4xl">Column 2</h1>
    </div>
</div>