<!-- writeReview -->
<script>
    /** @type {import('./$types').PageData} */
    import { Button, Label, Input , Radio, Toolbar, ToolbarGroup, ToolbarButton, Textarea, DropdownItem, Dropdown, DropdownDivider, DropdownHeader, Checkbox} from "flowbite-svelte";
	import { ChevronDownOutline, PaperClipOutline, MapPinAltSolid } from 'flowbite-svelte-icons';
    import Navbar from "../../../../lib/Navbar.svelte";
    import { page } from '$app/stores';
    
    const gameId = $page.params.gameId;

    export let data;
    let currentDate = new Date();
    let options = {
        month: '2-digit', // 2-digit numeric representation of the month
        day: '2-digit',   // 2-digit numeric representation of the day
        year: 'numeric'   // Full numeric representation of the year
    };
    let rating = 3;

  // Format the date
    let formattedDate = currentDate.toLocaleDateString(undefined, options);
    const game = JSON.parse(data.post.game);
    // const game = JSON.parse(data.post.game);
    const coverURL = data.post.cover;

    let spoilers = false;
    let review_text
    let platform = 'Xbox'

    function handleSubmit(){
        let reviewFields={gameId, currentDate, spoilers, review_text, platform, rating};
        console.log(reviewFields);
    }

</script>

<div class="sticky top-0 z-50">
    <Navbar/>
</div>

<div class=" mx-24 shadow-lg rounded-md border">
	<div class="grid grid-cols-4 ">
        <div class="col-span-1 m-2 p-2 self-start">
            <img src={coverURL} alt="game 1" class='border border-slate-200 shadow-md rounded-l'/>
        </div>
        <div class="col-span-3 mx-4 my-4 self-start">
            <Label for="review_text"class="space-y-24"></Label>
            <Textarea id="review_text" placeholder="Write your review here..." class="h-24" bind:value={review_text} required/>

            <div>{game.title}</div>
            <div>Username</div>
            <div>{formattedDate}</div>
            <div>
                <label>
                    <input type="radio" bind:group={rating} value={1} />
                </label>
                <label>
                    <input type="radio" bind:group={rating} value={2} />
                </label>
                <label>
                    <input type="radio" bind:group={rating} value={3} />
                </label>
                <label>
                    <input type="radio" bind:group={rating} value={4} />
                </label>
                <label>
                    <input type="radio" bind:group={rating} value={5} />
                </label>
            </div>
            <div class="">
                <span>1&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5</span>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-4">
        <div class="col-span-1 m-2 p-2 self-start">
            <div>
                <Checkbox id="spoilers" class="my-3">
                    <!-- <input type="checkbox" id="spoilers" bind:checked={spoilers} /> -->
                    Spoilers?
                </Checkbox>
                <Button>{platform}<ChevronDownOutline class="w-4 h-4 ms-2 text-white dark:text-white" /></Button>
                <Dropdown>
                    <li>
                        <Radio name="platform" bind:group={platform} value={'PC'}>PC</Radio>
                    </li>
                    <li>
                        <Radio name="platform" bind:group={platform} value={'Xbox'}>Xbox</Radio>
                    </li>
                    <li>
                        <Radio name="platform" bind:group={platform} value={'PlayStation'}>PlayStation</Radio>
                    </li>
                    <li>
                        <Radio name="platform" bind:group={platform} value={'Nintendo Switch'}>Nintendo Switch</Radio>
                    </li>
                </Dropdown>
            </div>
        </div>
        <div></div>
        <div></div>
        <div class= "mx-4 flex justify-end" style="margin-top: 60px; margin-bottom:16px;">
            <Button on:click={handleSubmit} class="">Post Review</Button>
        </div>
    </div>
</div>