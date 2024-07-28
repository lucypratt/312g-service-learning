
<script>
    /**
	 * @type {string | any[]}
	 */
     export let pokemons = []
    let currentIndex = 0

    function showNext() {
        currentIndex = (currentIndex + 1) % pokemons.length
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + pokemons.length) % pokemons.length
    }
</script>

<div class="slider">
    <div class="flex">
        <button class="btn variant-outline-primary uppercase h-10 my-auto" on:click={showPrevious}>Previous</button>
        
       <!-- svelte-ignore a11y-missing-attribute -->
       
        <div class="slide-container flex justify-between items-center">
            {#each pokemons.slice(currentIndex, currentIndex + 3) as pokemon, index}
            <a href={`/pokemonex/${pokemon.name}`}>
                <div class="slide">
                    <img src={pokemon.image} alt={pokemon.name} class="w-48"/>
                    <h3 class="uppercase font-bold text-center">{pokemon.name}</h3>
                </div>
            </a>
            {/each}
        </div>
      
        
        
        <button class="btn variant-outline-primary uppercase h-10 my-auto" on:click={showNext}>Next</button>
    </div>
</div>


