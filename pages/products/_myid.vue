<template>
    <div>
        <DetailComponent :product="product" :canDelete="true" />
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            product: {},
            supaURL: process.env.supabaseApi
        }
    },
    async fetch() {
        const data = await this.$axios.get(this.supaURL + `/rest/v1/products?id=eq.${this.$route.params.myid}&select=*`, {
            headers: {
                apikey: process.env.supabaseKey,
                Authorization: 'Bearer ' + process.env.supabaseKey
            },
        })
        this.product = data.data[0]
    },
}
</script>