<template>
    <section class="mx-auto my-20 container flex items-center justify-between">
        <div class="w-[20%] h-3/4">
            <img :src="product.image" alt="product" class="w-80 p-3 shadow-lg" />
        </div>
        <div class="font-bold space-y-7 w-[50%]">
            <h2 class="text-2xl">{{ product.title }}</h2>
            <ul class="space-y-5 pl-5">
                <li class="text-lg">Original Price : ${{ originalPrice }}</li>
                <li class="text-lg">Discount Price : ${{ product.price }}</li>
                <li class="text-lg">Category : {{ product.category }}</li>
                <li class="font-semibold">{{ product.description }}</li>
            </ul>
        </div>
        <div class="w-[20%] pt-10">
            <section class="bg-secondary p-5 flex flex-col justify-between rounded-md text-primary">
                <h3 class="text-xl text-center font-bold text-gray">Payment</h3>
                <div class="p-3 space-y-5">
                    <p class="">Price : ${{ product.price }}</p>
                    <p class="">Transport : $1.2</p>
                    <p class="">Tax : $2.4</p>
                    <p class="">Etc : $1.3</p>
                    <p class="">Total : ${{ total }}</p>
                </div>
                <button class="flex border-primary border justify-center rounded-md p-1 hover:text-gray"
                    @click="saveToCart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4"
                        viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                    <p class="font-semibold text-lg">Add To Cart</p>
                </button>
            </section>
            <div v-show="canDelete" class="mt-10 text-right" @click="deleteMyProduct">
                <ButtonComponents name="Delete This Product" classes="bg-red-800 hover:bg-red-950" />
            </div>
        </div>

    </section>
</template>
  
<script>
export default {
    props: {
        product: {
            type: Object,
            default: function () { }
        },
        canDelete: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        originalPrice() {
            return (this.product.price + 11.1).toFixed(2);
        },
        total() {
            return (this.product.price + 4.9).toFixed(2);
        },
    },
    methods: {
        async saveToCart() {
            await this.$localForage.setItem(this.product.title, this.product);
            this.$router.push('/products/cart');
        },
        async deleteMyProduct() {
            await this.$axios.delete(process.env.supabaseApi + `/rest/v1/products?id=eq.${this.product.id}`, {
                headers: {
                    apikey: process.env.supabaseKey,
                    Authorization: 'Bearer ' + process.env.supabaseKey
                },
            })
            this.$router.push('/products/me');
        },
    },
};
</script>
