<template>
  <main id="content">
    <CardContainer v-if="cartProducts.length > 0" title="My-Cart" :primary="false">
      <CardItem :data="cartProducts" :is-cart="true" />
    </CardContainer>
    <div v-else>
      <h2 class="text-center text-4xl font-bold py-32 opacity-60">Cart Is Empty</h2>
    </div>
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      cartProducts: [],
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const data = []
      await this.$localForage.iterate((value, key) => {
        data.push({ value })
      })
      data.forEach((item) => this.cartProducts.push(item.value))
    },
  },
}
</script>
