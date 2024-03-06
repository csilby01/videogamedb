<script>
    import { Avatar, P, TextPlaceholder } from 'flowbite-svelte';
    import pfp from '$lib/images/pfp_placeholder.jpg';
    import game1 from '$lib/images/game1_placeholder.png';
</script>

<div class="border border-gray-500 my-3 p-5">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <Avatar src={pfp} />
        <div>
            <P><strong>User</strong> played <strong>Game 1</strong></P>
        </div>
    </div>
    <div class="grid grid-cols-5">
        <img src={game1} alt="game1" class="col-span-2"/>
        <!-- <P align="center" class="col-span-3">
            Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. Review text. 
        </P> -->
        <div class="col-span-2 mx-4">
            <TextPlaceholder size="md"/>
            <TextPlaceholder size="xl mt-3"/>
        </div>
    </div>
</div>