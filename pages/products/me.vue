<template>
    <main id="content">
        <h1 class="text-4xl font-semibold text-white p-5 bg-gray">Recent Products</h1>
        <CardContainer title="">
            <CardItem :data="myProducts" />
        </CardContainer>
    </main>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
export default {
    middleware: 'auth',
    computed: {
        ...mapState(['myProducts']),
    },
    mounted() {
        this.fetchMyProducts()
    },
    methods: {
        ...mapActions(['fetchMyProducts'])
    }
}
</script>
