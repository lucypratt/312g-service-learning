<script lang="ts">
import "../app.css";
import { AppShell, AppBar, Modal, initializeStores, Toast } from '@skeletonlabs/skeleton'
import { getModalStore } from '@skeletonlabs/skeleton'
import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton'
//import Navigation from '$lib/components/Navigation.svelte'
import { page } from '$app/stores'

import { signIn, signOut } from "@auth/sveltekit/client"
import ThemeMenu from '$lib/components/themeMenu.svelte'
import Navigation from '$lib/components/Navigation.svelte'
import { goto, onNavigate } from '$app/navigation'
import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton'



/* onNavigate((navigation) => {
if (!document.startViewTransition) return

return new Promise((resolve) => {
    document.startViewTransition(async () => {
        resolve()
        await navigation.complete
    })
})

})
 */
initializeStores()



let loggedIn: boolean = false

if (!$page.data.session?.user) {
    loggedIn = false
   
} else {
    loggedIn = true
}

$: console.log($page.data.session?.user)

const modalStore = getModalStore()
const handleSignOut = async () => {
    
    const modal: ModalSettings = {
        type: "confirm",
        title: "You Are Signing Out",
        body:"Are you sure you want to sign out?",
        image: "/goodbye.gif",
        response: (r: boolean) => { if (r) {
            signOut()
            goto('/')
        
        }
        }
    }
    modalStore.trigger(modal)
}

const drawerStore = getDrawerStore()
function drawerOpen(): void {
 drawerStore.open({})
}

function drawerClose(): void {
     drawerStore.close()
}</script>

<Modal></Modal>

<Toast></Toast>

<!-- App Shell -->
<Drawer position="right" width="1/2">
    <Navigation></Navigation>
    <ThemeMenu></ThemeMenu>
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">Accessibility Checklist</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden lg:block">
					<a href="/" class="border-b-2 mx-4 hover:scale-110 uppercase">CHECKLIST</a>
					<a href="/" class="mx-4 border-b-2 hover:scale-110 uppercase">Check Contrast</a>
					<a href="/" class="mx-4 border-b-2 hover:scale-110 uppercase">My Projects</a>
				

				</div>
				
				

				
				<button class="hidden lg:block text-xl mx-2 align-bottom" on:click="{drawerOpen}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 hover:scale-110">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  </button>

				  <div class="flex items-center">
					<button class="lg:hidden btn btn-sm " on:click="{drawerOpen}">
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20"/>
								<rect y="30" width="100" height="20"/>
								<rect y="60" width="100" height="20"/>
							</svg>
						</span>
					</button>
				   
				</div>



				


				

			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot></slot>
</AppShell>
