<template>
    <Head title="Welcome" />

    <!-- <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm text-gray-700 underline">
                Dashboard
            </Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 underline">
                    Log in
                </Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 underline">
                    Register
                </Link>
            </template>
        </div> -->

    <div class="min-h-screen bg-gray-100">
        <!-- Navigation Bar -->
        <navbar />

        <!-- FAB Button -->
        <fab />

        <!-- Intro Page -->
        <intro />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Navbar from "@/Pages/WelcomeKids/Navbar";
import Fab from "@/Pages/WelcomeKids/Fab";
import Intro from "@/Pages/WelcomeKids/IntroPage/index";

export default defineComponent({
    components: {
        Head,
        Link,
        Navbar,
        Fab,
        Intro,
    },

    props: {
        canLogin: Boolean,
        canRegister: Boolean,
    },

    data() {
        return {
            menu: [
                {
                    icon: "done",
                    title: "good job!",
                    color: "#ff9900",
                },
                {
                    icon: "toc",
                    title: "",
                    color: "#999",
                },
            ],
            mainBtnColor: "#3eaf7c",
        };
    },

    methods: {
        clickItem(item) {
            window.alert(item.idx);
        },
    },
});
</script>

<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.text-gray-700 {
    color: #4a5568;
    color: rgba(74, 85, 104, var(--tw-text-opacity));
}
</style>
