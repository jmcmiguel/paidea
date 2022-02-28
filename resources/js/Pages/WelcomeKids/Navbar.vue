<template>
    <nav class="bg-white border-b border-gray-100 drop-shadow-xl">
        <!-- Primary Navigation Menu -->
        <div class="max-w-screen-2xl mx-auto px-10 sm:px-12 lg:px-20">
            <div class="flex justify-between h-24">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('dashboard')">
                            <navbar-logo class="block h-28 w-28" />
                        </Link>
                    </div>
                </div>

                <div class="hidden lg:flex lg:items-center lg:ml-6">

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <jet-nav-link :href="route('welcome')" :active="route().current('welcome')">
                            Home
                        </jet-nav-link>
                        
                        <jet-nav-link :href="route('dashboard')">
                            For Tutors
                        </jet-nav-link>
                        
                        <jet-nav-link :href="route('dashboard')">
                            For College
                        </jet-nav-link>
                        
                        <button @click="goToRegister" class="w-36 p-1 pl-5 pr-5 bg-transparent border-2 border-blue-1000 font-semibold text-blue-1000 rounded-lg hover:animate-pulse hover:bg-blue-1000 hover:text-gray-100">Sign Up</button>
                        
                        <button class="w-36 p-1 pl-5 pr-5 bg-yellow-1000 font-semibold text-gray-100 rounded-lg focus:border-4 border-yellow-1000 hover:animate-pulse">Book for free</button>
                    </div>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center lg:hidden">
                    <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="lg:hidden">
            <div class="pt-2 pb-3 space-y-1">
                <jet-responsive-nav-link :href="route('welcome')" :active="route().current('welcome')">
                    Home
                </jet-responsive-nav-link>

                <jet-responsive-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                    For Tutors
                </jet-responsive-nav-link>
                
                <jet-responsive-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                    For College
                </jet-responsive-nav-link>
            </div>

            <!-- Responsive Settings Options -->
            <div class="pt-2 pb-3 border-t border-gray-200">
                <div>
                    <!-- Sign Up -->
                    <form method="POST">
                        <jet-responsive-nav-link as="button">
                            Sign up
                        </jet-responsive-nav-link>
                    </form>
                </div>
                
                <div>
                    <!-- Book for Free -->
                    <form method="POST">
                        <jet-responsive-nav-link as="button">
                            Book for free
                        </jet-responsive-nav-link>
                    </form>
                </div>
            </div>
        </div>
    </nav>
    
</template>

<script>
 import JetApplicationMark from '@/Jetstream/ApplicationMark.vue'
import JetBanner from '@/Jetstream/Banner.vue'
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetDropdownLink from '@/Jetstream/DropdownLink.vue'
import JetNavLink from '@/Jetstream/NavLink.vue'
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue'
import NavbarLogo from './NavbarLogo.vue'
import { Head, Link } from '@inertiajs/inertia-vue3';
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
            Head,
            JetApplicationMark,
            JetBanner,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
            Link,
            NavbarLogo
    },

    data() {
        return {
            showingNavigationDropdown: false,
        }
    },

    methods: {
        goToRegister() {
            this.$inertia.get(route('register'));
        }
    }
    
})
</script>