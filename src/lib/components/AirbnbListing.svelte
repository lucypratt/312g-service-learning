<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton'


    const modalStore = getModalStore()

   

    const dispatch = createEventDispatcher()
export let listings: [] = []
$: listings

interface Listing {
    _id: string
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

$: convertedListings = convertToListing(listings)

function convertToListing(data: any): Listing[] {
    return data.map((listing: any) => {
        return {
            _id: listing._id || '',
            name: listing.name || '',
            listing_url: listing.listing_url || '',
            summary: listing.summary || '',
            space: listing.space || '',
            room_type: listing.room_type || '',
            price: listing.price || 0,
            bedrooms: listing.bedrooms || 0,
            bathrooms: listing.bathrooms || 0,
            security_deposit: listing.security_deposit || 0,
            images: {
                picture_url: listing.picture_url || ''
            },
            minimum_nights: listing.minimum_nights || 0,
            maximum_nights: listing.maximum_nights || 0,
            accomodates: listing.accomodates || 0,
            address: {
                street: listing.street || ''
            },
            description: listing.description || '',
            notes: listing.notes || '',
            transit: listing.transit || '',
            access: listing.access || '',
            reviews: listing.reviews || []
        }
    })

}

function showReviewForm(listing: Listing): void {
        console.log('showReviewForm')
        dispatch('showReviewForm', 
        { show: true,
          name: listing.name
         })
    }

	const showReviews = async (listing: Listing) => {
		console.log('showReviews')
        console.log(listing)
		dispatch('showReviews', 
		{ show: true,
		  reviews: listing.reviews,
          name: listing.name
		 })
	}

    
</script>

<div class="flex flex-wrap justify-center w-full mt-4">
    {#each convertedListings as listing}
    <div class="card m-4 p-2 w-96">
        <div class="flex"><h2 class="uppercase font-bold text-primary-500 underline transition-transform transform hover:-translate-y-1 hover:text-primary-300"> <a href={`/airbnb2/${listing._id}`}>{listing.name}</a></h2>
        
        
        </div>
        
        <p class="text-sm mb-1">${listing.price}</p>
        <p class="text-sm mb-1">{listing.summary}</p>
        <div class="flex">
            <button class="btn variant-filled-primary uppercase mr-2" on:click={() => showReviews(listing)}>See Reviews</button>
            <button class="uppercase btn variant-outline-primary" on:click={() => showReviewForm(listing)}>Leave a Review</button>
        </div>
       <!--<a href={`/airbnb2/${listing._id}`}><button class="uppercase btn variant-filled-primary mt-2">See Listing</button></a>--> 


    </div>
    {/each}

</div>

