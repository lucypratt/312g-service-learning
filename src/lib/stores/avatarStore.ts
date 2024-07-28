import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const initialAvatarData: any[] | undefined = []

export const avatarStore = writable(initialAvatarData)