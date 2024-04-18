<!-- Sign Up Page -->
<script>
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Label, Input} from "flowbite-svelte";
	import Navbar from "../../lib/Navbar.svelte";

    let username = "";
    let firstname = "";
    let lastname = "";
    let password = "";
    let password2 = "";
    let email = "";
    if(password !== password2){
      console.log("Passwords do not match");
      return;
    }

    async function handleSubmit(event){
        const formData = new FormData(event.target);
        const response = await fetch('/signup', {
          method: 'POST',
          body: formData
        });
    }
</script>

<Navbar />
<Section name="login">
    <Register href="/">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="flex flex-col space-y-6" action="/" on:submit={handleSubmit}>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Register</h3>
          <div class="grid grid-cols-2">
            <Label class="space-y-2 col-span-1 mr-1">
                <span>First name</span>
                <Input type="text" id="firstname" name ="firstname" placeholder="First Name" bind:value={firstname} required />
            </Label>
            <Label class="space-y-2 col-span-1 ml-1">
                <span>Last name</span>
                <Input type="text" id="lastname" name="lastname" placeholder="Last Name" bind:value={lastname} required />
            </Label>
          </div>
          <Label class="space-y-2">
            <span>Username</span>
            <Input type="text" id="username" name="username" placeholder="Username" bind:value={username} required />
          </Label>
          <Label class="space-y-2">
            <span>Email</span>
            <Input type="email" id="email" name="email" placeholder="email@email.com" bind:value={email} required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" id="password" name ="password" placeholder="•••••" bind:value={password} required />
          </Label>
          <Label class="space-y-2">
            <span>Confirm password</span>
            <Input type="password" id="password2" placeholder="•••••" required />
          </Label>
          <Button type="submit" class="w-full1">Sign Up</Button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
          </p>
        </form>
      </div>
    </Register>
  </Section>