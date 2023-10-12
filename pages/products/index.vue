<template>
    <main id="content">
        <h1 class="text-5xl font-semibold text-white p-5 bg-gray">Find Our Products</h1>
        <CardContainer title="Men's Clothing">
            <CardItem :data="menData" />
        </CardContainer>

        <CardContainer title="Jewelery" :primary="false">
            <CardItem :data="jeweleryData" :is-clothes="false" />
        </CardContainer>

        <CardContainer title="Electronicts">
            <CardItem :data="eletData" :is-clothes="false" />
        </CardContainer>

        <CardContainer title="Women's Clothing" :primary="false">
            <CardItem :data="womenData" />
        </CardContainer>
    </main>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
export default {
    middleware: 'auth',
    computed: {
        ...mapState(['menData', 'womenData', 'jeweleryData', 'eletData']),
    },
    mounted() {
        this.fetchMenProducts()
        this.fetchWomenProducts()
        this.fetchJeweleryProducts()
        this.fetchElectronictsProducts()
    },
    methods: {
        ...mapActions(['fetchMenProducts', 'fetchWomenProducts', 'fetchJeweleryProducts', 'fetchElectronictsProducts'])
    }
}
</script>
