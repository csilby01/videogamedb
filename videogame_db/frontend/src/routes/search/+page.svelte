<script>
    import Navbar from "../../lib/Navbar.svelte";
    import { page } from '$app/stores';
    $: query = $page.url.searchParams.get('query');
</script>

<div class="sticky top-0 z-50">
    <Navbar/>
    <p>Showing search results for: <span class="text-yellow-400 font-bold">{query}</span></p>
</div>