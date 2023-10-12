<template>
  <div>
    <DetailComponent :product="product" />
    <CardContainer title="Recomended for you">
      <CardItem :data="recomended" :is-clothes=false />
    </CardContainer>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      product: {},
      recomended: [],
    }
  },
  async fetch() {
    this.product = await fetch(
      `https://fakestoreapi.com/products/${this.$route.params.id}`
    ).then((res) => res.json())

    this.recomended = await fetch(
      `https://fakestoreapi.com/products/category/${this.product.category}?limit=4`
    ).then((res) => res.json())
  },
}
</script>