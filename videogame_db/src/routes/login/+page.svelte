<!-- Login Page -->
<script>
    import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Checkbox, Label, Input } from "flowbite-svelte";
	import Navbar from '../../lib/Navbar.svelte';

    let username = "";
    let password = "";

    function handleSubmit(){
        let loginFields={username, password};
        console.log(loginFields);
    }
</script>

<Navbar />
<Section name="login">
    <Register href="/">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="flex flex-col space-y-6" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Login</h3>
          <Label class="space-y-2">
            <span>Username</span>
            <Input type="username" name="username" placeholder="Username" bind:value={username} required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" name="password" placeholder="•••••" bind:value={password} required />
          </Label>
          <Button on:click={handleSubmit} class="w-full1">Sign in</Button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
          </p>
        </form>
      </div>
    </Register>
  </Section>