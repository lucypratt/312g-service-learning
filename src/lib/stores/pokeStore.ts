import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

interface Pokemon {
    name: string;
    url: string;
    image: string;
}



export const pokeStore: Writable<Pokemon[]> = writable([])