<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher()

	function sayHello() {
		dispatch('message', {
			text: 'Hello Please work.'
			
			
		})
	}
</script>

<button class="btn variant-filled bg-primary-500 font-bold uppercase shadow-xl text-white" on:click={sayHello}>
	Count Dots 
</button>