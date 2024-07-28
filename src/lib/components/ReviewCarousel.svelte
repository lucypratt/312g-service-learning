<script lang="ts">
    import { Ratings } from '@skeletonlabs/skeleton'
    import { icons } from '$lib/icons/icons'
    import { createEventDispatcher } from "svelte"
    
    interface Review {
            _id: string
            data: Date
            listing_id: string
            reviewer_name: string
            comments: string
            rating: number
        }

        interface Listing {
    name: string
    listing_url: string
    summary: string
    space: string
    room_type: string
    price: number
    bedrooms: number
    bathrooms: number
    security_deposit: number
    images: {
        picture_url: string
    }
    minimum_nights: number
    maximum_nights: number
    accomodates: number
    address: {
        street: string
    }
    description: string
    notes: string
    transit: string
    access: string
    reviews: string[]
}
    
    export let reviews: Review[] = []
    export let close: () => void;
    export let name: string = ''
    
    let elemCarousel: HTMLDivElement;
    const dispatch = createEventDispatcher()
    
    
    function carouselLeft(): void {
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }
    
    function carouselRight(): void {
        const x =
            elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }

    function setName(listing: Listing): void {
        console.log('showName')
        dispatch('showName', 
        { 
          name: listing.name
         })
    }
                        
    
    </script>
    <!--Find a cancel button to put in here-->
    <div class="card p-4 ">
        
        <div class="flex justify-end">
            <button on:click={close}><i class="fa-solid fa-x"></i></button>
        </div>
        <div class="flex justify-center">
            <p class="text-xl uppercase">Reviews of <span class="text-primary-500">{name}</span></p>
        </div>
        
        <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
            
            <button class="btn-icon variant-outline-primary" on:click={carouselLeft}>
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
                
                {#each reviews as review}
                <div class="card min-w-48 h-64 p-2 m-1 snap-start">
                    <h6 class="pb-2">{review.reviewer_name}</h6>
                    {#if review.rating}
                    <Ratings bind:value={review.rating}>
                        <svelte:fragment slot="empty">
                            {@html icons.starEmpty}
                        </svelte:fragment>
                        <svelte:fragment slot="half">
                            {@html icons.starHalf}
                        </svelte:fragment>
                        <svelte:fragment slot="full">
                            {@html icons.starFull}
                        </svelte:fragment>
                    </Ratings>
                    {/if}
                    <article>
                        <p class="text-xs line-clamp-[12]">{review.comments}</p>
                    </article>
                </div>
                {/each}
            </div>
            <button class="btn-icon variant-outline-primary" on:click={carouselRight}>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  