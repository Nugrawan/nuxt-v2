<!-- Your existing component -->
<template>
    <main>
        <div class="py-10 text-secondary mt-10 rounded-md border border-secondary w-[30%] mx-auto space-y-5">
            <h2 class="text-center font-bold text-2xl">Add Product</h2>
            <form class="flex p-5 flex-col" @submit.prevent="addProduct">
                <InputField label="Title" v-model="data.title" name="title" type="text" required />
                <select v-model="data.category" name="category" required
                    class="font-semibold p-2 border border-black rounded-md my-3">
                    <option value="" disabled>Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
                <InputField label="Price" v-model="data.price" name="price" type="number" required />
                <InputField label="Description" v-model="data.description" name="description" type="text" required />
                <InputField label="Image Link" v-model="data.image" name="image" type="text" required />
                <ButtonForm title="Send" type="submit" />
            </form>
        </div>
    </main>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    middleware: 'auth',
    data() {
        return {
            data: {
                title: '',
                price: null,
                description: '',
                category: '',
                image: '',
                rating: {
                    rate: 0,
                    count: 0,
                },
            },
        };
    },
    methods: {
        ...mapActions(['addMyProducts']),
        async addProduct() {
            await this.addMyProducts(this.data);
            this.$router.push('/products/me');
        },
    },
};
</script>
