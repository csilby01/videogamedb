<script>
	import '../app.pcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:NavContainer color="primary">
	<NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
	  <NavBrand href="/">
		<img src="../../static/favicon.png" class="me-3 h-6 sm:h-9" alt="Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">Video Game DB</span>
	  </NavBrand>
	  <NavHamburger />
	  <NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/profile">Profile</NavLi>
		<NavLi href="/signup">Sign Up</NavLi>
		<NavLi href="/login">Login</NavLi>
	  </NavUl>
	</NavContainer>
</Navbar>

<slot />