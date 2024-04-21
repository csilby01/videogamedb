<script>
    import { onMount } from 'svelte';
    import { GradientButton } from "flowbite-svelte";

    let isFollowing = false;
    export let userId;
    export let currentUserId;
</script>

<div class ="flex items-center my-2">
    <GradientButton color="pinkToOrange" href="/">
        {isFollowing ? 'Unfollow' : 'Follow'}
    </GradientButton>
</div>