<script>
  import '../app.pcss';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
  import logo from "$lib/images/logo.png";
  import { goto } from '$app/navigation';

  let search = "";
  
  function handleSubmitSearch(event) {
      event.preventDefault();
      goto(`/search?query=${encodeURIComponent(search)}`);
  }

  async function handleLogout() {
      const response = await fetch('/logout', { method: 'GET' });
      if (response.ok) {
          goto('/');
      }
  }

  export let session;
  console.log('Navbar session:', session);
</script>

<Navbar>
  <NavBrand href="/">
      <img src={logo} class="me-3 h-6 sm:h-9" alt="Video Game DB Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold text-primary-600">GameGather</span>
  </NavBrand>
  <div class="flex md:order-2">
      <form on:submit={handleSubmitSearch}>
          <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <SearchOutline class="w-5 h-5" />
          </Button>
          <div class="hidden relative md:block">
              <div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                  <SearchOutline class="w-4 h-4" />
              </div>
              <Input id="search-navbar" class="ps-10" bind:value={search} placeholder="Search..." />
          </div>
      </form>
      <NavHamburger />
  </div>
  <NavUl>
      <NavLi href="/">Home</NavLi>
      {#if session && session.user}
          <NavLi href="/profile">Profile</NavLi>
          <NavLi on:click={handleLogout}>Logout</NavLi>
      {:else}
          <NavLi href="/signup">Sign Up</NavLi>
          <NavLi href="/login">Login</NavLi>
      {/if}
  </NavUl>
</Navbar>

