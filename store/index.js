export const state = () => ({
    myAddProducts: [],
    myProducts: [],
    selectedProducts: [],
    categories: [],
    menData: [],
    womenData: [],
    jeweleryData: [],
    eletData: [],
});

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn;
    },

    loggedInUser(state) {
        return state.auth.user;
    },
};

export const mutations = {
    MY_ADD_PRODUCTS(state, product) {
        state.myAddProducts.push(product);
    },
    MY_PRODUCTS(state, product) {
        state.myProducts = product;
    },
    SELECTED_PRODUCTS(state, data) {
        state.selectedProducts = data;
    },
    CATEGORIES(state, data) {
        state.categories = data;
    },
    MEN(state, data) {
        state.menData = data;
    },
    WOMEN(state, data) {
        state.womenData = data;
    },
    JEWELERY(state, data) {
        state.jeweleryData = data;
    },
    ELECTRONICTS(state, data) {
        state.eletData = data;
    },
};

const supaURL = process.env.supabaseApi;
const url = 'https://fakestoreapi.com/';

export const actions = {
    async addMyProducts({ commit }, myProducts) {
        const { data } = await this.$axios.post(supaURL + "/rest/v1/products", myProducts, {
            headers: {
                apikey: process.env.supabaseKey,
                Authorization: 'Bearer ' + process.env.supabaseKey
            },
        })
        commit('MY_ADD_PRODUCTS', data);
    },
    async fetchMyProducts({ commit }) {
        const { data } = await this.$axios.get(supaURL + "/rest/v1/products", {
            headers: {
                apikey: process.env.supabaseKey,
                Authorization: 'Bearer ' + process.env.supabaseKey
            },
        })
        commit('MY_PRODUCTS', data);
    },

    async selectProducts({ commit }, category) {
        const { data } = await this.$axios.get(url + 'products/category/' + category + '?limit=4');
        commit('SELECTED_PRODUCTS', data);
    },

    async fetchCategories({ commit }) {
        const { data } = await this.$axios.get(url + "products/categories");
        commit('CATEGORIES', data);
    },
    async fetchMenProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/men's clothing");
        commit('MEN', data);
    },
    async fetchWomenProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/women's clothing?limit=4");
        commit('WOMEN', data);
    },
    async fetchJeweleryProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/jewelery");
        commit('JEWELERY', data);
    },
    async fetchElectronictsProducts({ commit }) {
        const { data } = await this.$axios.get(url + "products/category/electronics?limit=4");
        commit('ELECTRONICTS', data);
    },
};
