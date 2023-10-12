<template>
    <header>
        <nav class="p-4 flex justify-between text-secondary bg-primary items-center">
            <div class="flex gap-10">
                <NuxtLink to="/">
                    <MarketupLogo container="shadow-inner shadow-gray hover:shadow-black -rotate-1" />
                </NuxtLink>
                <ul class="menu nav-list flex items-center gap-5 justify-around font-semibold">
                    <li>
                        <NuxtLink to="/products"> Products </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/me"> My Products </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/add"> Add Product </NuxtLink>
                    </li>
                </ul>
            </div>
            <ul class="flex items-center gap-5">
                <li>
                    <SmallButton target="/products/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-cart4" viewBox="0 0 16 16">
                            <path
                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                    </SmallButton>
                </li>
                <li>
                    <SmallButton target="/products/add">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-bag-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </SmallButton>
                </li>
                <li>
                    <SmallButton target="/products/me">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg>
                    </SmallButton>
                </li>
                <li v-if="isAuthenticated">
                    <button class="font-bold text-3xl" @click="profile = true">{{
                        loggedInUser.username.charAt(0).toUpperCase()
                    }}</button>
                    <div v-show="profile" class="bg-secondary p-5 w-1/6 rounded-md absolute z-10 mt-5 right-5 text-white">
                        <button class="text-xl font-bold absolute right-3 top-2" @click="profile = false">X</button>
                        <h3 class="mb-2 font-bold text-xl">{{ loggedInUser.username }}</h3>
                        <h3 class="mb-5">{{ loggedInUser.email }}</h3>
                        <button class="font-bold text-xl" @click="logout">
                            <ButtonComponents name="Logout" :primary=true />
                        </button>
                    </div>
                </li>
                <div v-else class="flex gap-3">
                    <li>
                        <ButtonComponents target="/register" name="Sign Up" />
                    </li>
                    <li>
                        <ButtonComponents target="/login" name="Sign In" />
                    </li>
                </div>
            </ul>
        </nav>
        <div class="bg-secondary text-primary py-2 px-20 flex items-center gap-20 justify-between">
            <p class="opacity-80 font-light">We offer a variety of styles for all occasions, from casual to formal wear.
            </p>
            <div class="bg-primary rounded-lg px-5 py-1 text-secondary">
                <input id="search" type="search" name="search" placeholder="Search..."
                    class="focus:outline-none appearance-none" />
                <button class="border-l px-2 hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            profile: false
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async logout() {
            await this.$auth.logout();
        },
    },
}
</script>