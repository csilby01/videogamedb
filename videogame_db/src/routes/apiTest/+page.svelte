<script>
    import { onMount } from 'svelte';

    let data;

    onMount(async () => {
        const response = await fetch('/api');
        data = await response.json();
        console.log(data);
    });
</script>

<p>${data}</p>