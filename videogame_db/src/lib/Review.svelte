<script>
    import { Avatar, P, TextPlaceholder } from 'flowbite-svelte';
    import pfp from '$lib/images/pfp_placeholder.jpg';
    import game1 from '$lib/images/game1_placeholder.png';
</script>

<div class="review_layout border border-slate-200 shadow-md rounded-lg my-3 p-3">
    <div class="col_1">
        <h1 class="row-span-1"><a href="/game" class="hover:underline">Game 1</a></h1>
        <a href="/game"><img src={game1} alt="game1" class="row-span-1"/></a>
    </div>
    <div class="col_2 mx-3">
        <div class="row-span-1">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <a href="/profile"><Avatar src={pfp} /></a>
                <div class="space-y-1">
                    <div><P><strong><a href="/profile" class="hover:underline">User</a></strong> played <strong><a href="/game" class="hover:underline">Game 1</a></strong></P></div>
                </div>
            </div>
        </div>
        <div class="row-span-1">
            <TextPlaceholder size="md" class="py-4"/>
            <TextPlaceholder size="xl mt-3" class="pt-2"/>
        </div>
    </div>
    <div class="col_3">
        Rating
    </div>
</div>

<style>
    .review_layout{
        display: grid;
        grid-template-columns: minmax(100px, 1fr) minmax(400px, 4fr) minmax(50px, 1fr);
    }
    .col_1 {
        display:grid;
        grid-template-rows: minmax(30px, 1fr) minmax(100px, 2fr);
    }
    .col_1 > :first-child {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .col_2 {
        display: grid;
        grid-template-rows: 1fr 4fr;
    }
    .col_2 > :first-child {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .col_3 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>