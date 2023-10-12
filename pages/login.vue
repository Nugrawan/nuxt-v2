<template>
  <main>
    <div class="py-10 text-secondary mt-10 rounded-md border border-secondary w-[30%] mx-auto space-y-5">
      <h2 class="text-center font-bold text-2xl">Login!</h2>
      <NotifComponent v-if="error" :message="error" />
      <form method="post" class="flex p-5 flex-col" @submit.prevent="login">
        <label class="text-sm p-1 block my-3 font-semibold w-full">Email
          <div class="rounded-md border p-1">
            <input v-model="email" name="email" type="text" class="outline-none w-full" required />
          </div>
        </label>
        <label class="text-sm p-1 block my-3 font-semibold w-full">Password
          <div class="rounded-md border p-1">
            <input v-model="password" name="password" type="password" class="outline-none w-full" required />
          </div>
        </label>
        <ButtonForm title="Login" type="submit" />
      </form>
      <div class="mt-5 text-center">
        Don't have an account?
        <nuxt-link to="/register" class="text-gray hover:underline">Register</nuxt-link>
      </div>
    </div>
  </main>
</template>
  
<script>
export default {
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>