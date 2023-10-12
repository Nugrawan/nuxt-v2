<template>
  <main id="content">
    <h1 class="text-5xl font-semibold text-white p-5 bg-gray">Our Products Categories</h1>
    <div class="px-10 items-center text-secondary text-xl font-bold flex gap-10">
      <button v-for="category in categories" :key="category" class="hover:bg-gray p-3" @click="selectProducts(category)">
        {{ category }}
      </button>
    </div>
    <CardContainer title="">
      <CardItem :is-clothes="false" :data="selectedProducts.length == 0 ? eletData : selectedProducts" />
    </CardContainer>
    <div class="bg-[url('/second.jpg')] bg-cover w-5/6 mx-auto p-10 h-96 m-10 rounded-md flex flex-col justify-center">
      <div class="w-[40%] text-white">
        <h2 class="text-4xl font-bold mb-3">Feel Free To Explore Anywhere!</h2>
        <p class="text-sm mb-5">Introducing our luxurious and comfortable lingerie collection, designed to make you feel
          confident and elegant every day. Our premium fabrics and exquisite designs ensure a perfect fit, whether you're
          looking for sensual lace, everyday essentials, or something special. Elevate your inner beauty with our intimate
          apparel.</p>
        <div>
          <ButtonComponents name="Find All Products" target="/products" />
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'home',
  computed: {
    ...mapState(['selectedProducts', 'categories', 'eletData']),
  },
  mounted() {
    this.fetchCategories()
    this.fetchElectronictsProducts()
  },
  methods: {
    ...mapActions(['selectProducts', 'fetchCategories', 'fetchElectronictsProducts']),
  }
}
</script>
