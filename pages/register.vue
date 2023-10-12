<template>
  <main>
    <div class="py-10 text-secondary w-3/6 my-10 rounded-md border border-secondary mx-auto space-y-5">
      <h2 class="text-center font-bold text-2xl">Register!</h2>
      <NotifComponent v-if="error" :message="error" />

      <form method="post" class="p-5" @submit.prevent="register">
        <div class="flex gap-10">
          <div class="flex-1">
            <label class="text-sm p-1 block my-3 font-semibold w-full">Username
              <div class="rounded-md border p-1">
                <input v-model="username" name="username" type="text" class="outline-none w-full" required />
              </div>
            </label>
            <label class="text-sm p-1 block my-3 font-semibold w-full">Password
              <div class="rounded-md border p-1">
                <input v-model="email" name="email" type="email" class="outline-none w-full" required />
              </div>
            </label>
            <label class="text-sm p-1 block my-3 font-semibold w-full">Password
              <div class="rounded-md border p-1">
                <input v-model="password" name="password" type="password" class="outline-none w-full" required />
              </div>
            </label>
          </div>
        </div>

        <ButtonForm title="Register" type="submit" />
      </form>

      <div class="mt-5 text-center">
        Already got an account?
        <nuxt-link to="/login" class="text-gray hover:underline">Login</nuxt-link>
      </div>
    </div>
  </main>
</template>
  
<script>
export default {
  middleware: 'guest',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('http://127.0.0.1:3333/api/register', {
          username: this.username,
          email: this.email,
          password: this.password
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          }
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>