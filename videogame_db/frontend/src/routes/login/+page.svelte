<script context="module">

  export async function load({ session }) {
      return {
          props: {
              session: session
          }
      };
  }
  
</script>
<!-- Login Page -->
<script>
    import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Label, Input } from "flowbite-svelte";
    import Navbar from '../../lib/Navbar.svelte';
  

    let username = "";
    let password = "";

    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch('/login', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });

    if (response.ok) {
        window.location.href = '/'; 
    } else {
       
        const result = await response.json(); 
        console.error('Login failed:', result.error);
        alert('Login failed: ' + result.error); // Show error message to user
    }
  }

  export let session;
</script>









<Navbar {session}/>
<Section name="login">
    <Register href="/">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="flex flex-col space-y-6" action="/" on:submit|preventDefault={handleSubmit}>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Login</h3>
          <Label class="space-y-2">
            <span>Email</span>
            <Input type="email" name="email" placeholder="Email" bind:value={username} required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" name="password" placeholder="password" bind:value={password} required />
          </Label>
          <Button type = "submit" class="w-full1">Sign in</Button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
          </p>
        </form>
      </div>
    </Register>
  </Section>

  