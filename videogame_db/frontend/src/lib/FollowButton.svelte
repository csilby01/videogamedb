<script>
    import { onMount } from 'svelte';
    import { GradientButton } from "flowbite-svelte";

    let isFollowing = false;
    export let userId;
    export let currentUserId;

    onMount(async () => {
        const check = await fetch(`/api/follow/check/${userId}`, {
            headers: {'Content-Type': 'application/json'}
        });
        if (check.ok) {
            const data = await check.json();
            isFollowing = data.isFollowing;
        }
    });
</script>

<div class ="flex items-center my-2">
    <GradientButton color="pinkToOrange" href="/">
        {isFollowing ? 'Unfollow' : 'Follow'}
    </GradientButton>
</div>