<script>
    import { onMount } from 'svelte';

    let data;

    onMount(async () => {
        console.log("Hi");
        const response = await fetch('/api');
        data = await response.json();
    });
</script>

<p>${data}</p>