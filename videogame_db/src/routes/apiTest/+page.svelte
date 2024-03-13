<script>
    import { onMount } from 'svelte';

    let data;

    onMount(async () => {
        const response = await fetch('/api/games.js');
        data = await response.json();
    });
</script>

<p>${data}</p>