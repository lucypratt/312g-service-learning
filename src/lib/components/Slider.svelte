<script lang="ts">
    import { faker } from '@faker-js/faker'
    import { fade, fly } from 'svelte/transition'
    import { tweened, spring } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	
    let visible = false

    let slideNum = 0
    export let grade: string;

    const slideLeft = () => {
        if(slideNum > 0) {
            slideNum --
        } else {
            slideNum = image.length - 1
        }
        visible = true
    }

    const slideRight = () => {
        if(slideNum < image.length - 1) {
            slideNum ++
        } else {
            slideNum = 0
        }
        visible = true
    }

    const image = [...Array(10)].map(() => {
            const lastName = faker.person.lastName()
            return {
                avatar: `https://api.dicebear.com/7.x/open-peeps/svg?seed=${lastName}`
            }
        })

        
</script>

<div class=" flex">
    <button class="btn variant-filled-primary font-bold text-white rounded-lg" on:click={slideLeft}>
        &lt;
    </button>
    {#key slideNum}
    <div class="block">
        <img in:fade src="{image[slideNum].avatar}" alt="Avatar" class="w-72 h-72 object-cover">
        <p class="font-bold text-xl p-2 border-2 border-solid border-primary-400 m-2 rounded-md" in:fade>Grade: {grade}</p>
    </div>
    
    {/key}
    <button class="btn variant-filled-primary font-bold text-white rounded-lg" on:click={slideRight}>
        &gt;
    </button>
</div>


