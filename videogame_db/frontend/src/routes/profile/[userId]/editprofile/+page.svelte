<!-- Sign Up Page -->
<script>
    import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Label, Input} from "flowbite-svelte";
	import Navbar from "$lib/Navbar.svelte";

    export let data;
    const user = JSON.parse(data.post.user);

    let firstName = user.firstName;
    let lastName = user.lastName;
    let password = "";
    let  avatar, fileinput;
    
    const onFileSelected =(e)=>{
     let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
                avatar = e.target.result
            };
        console.log(fileinput)
    }

    async function handleSubmit(){
        let userFields={firstName, lastName, password};
        
        try {
            const response = await fetch(`/profile/${user.user_id}/editprofile`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(userFields)
            });

            const result = await response.json();
            if (result.success){
                console.log('Profile edited:', result.data);
            }
            else {
                console.error(`Failed to edit profile: ${result.message}`);
            }
        } catch (error) {
            console.error('Error editing profile:', error);
        }
    }
    

</script>
<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
	.avatar{
		display:flex;
		height:200px;
		width:200px;
	}
</style>
<Navbar />
<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Edit Profile</h3>
        <div class="grid grid-cols-2">
            <Label class="space-y-2 col-span-1 mr-1">
                <span>First name</span>
                <Input type="text" id="firstname" placeholder="{user.firstName}" bind:value={firstName} required />
            </Label>
            <Label class="space-y-2 col-span-1 ml-1">
                <span>Last name</span>
                <Input type="text" id="lastname" placeholder="{user.lastName}" bind:value={lastName} required />
            </Label>
        </div>
        <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" id="password" placeholder="•••••" bind:value={password} required />
        </Label>
        <Label class="space-y-2">
            <span>Confirm password</span>
            <Input type="password" id="password" placeholder="•••••" required />
        </Label>
        <div id="app">
            <h1 class="font-bold text-lg">Upload Image</h1>
          
                {#if avatar}
                <img class="avatar" src="{avatar}" alt="d" />
                {:else}
                No Image
                {/if}
                <div class="cursor-pointer chan text-lg font-bold border border-slate-200 shadow-md rounded-lg px-2" on:click={()=>{fileinput.click();}}>Choose Image</div>
                <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
        </div>
        <Button on:click={handleSubmit} class=" my-10 w-full1">Update Info</Button>
    </form>
</div>