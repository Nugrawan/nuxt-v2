<template>
  <div class="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <div v-for="p in data" :key="p.id" class="p-3 text-secondary bg-white shadow-lg flex flex-col justify-between">
      <NuxtLink :to="'/products' + (p.id.length > 5 ? '/me/' : '/') + p.id">
        <div class="-mb-3">
          <p class="opacity-30 line-through text-right">
            ${{ p.price + 11.1 }}
          </p>
          <p class="text-xl text-right">${{ p.price }}</p>
        </div>
        <img :src="p.image" alt="Image" :class="[isClothes ? 'h-72' : 'h-48', 'mx-auto py-3']" />
        <p class="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-star-fill"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg><span class="font-medium text-sm">{{ p.rating.rate }} ({{ p.rating.count }})</span>
        </p>
        <h3 class="text-ellipsis font-semibold overflow-hidden whitespace-nowrap">{{ p.title }}</h3>
      </NuxtLink>
      <div v-if="isCart">
        <button class="bg-secondary p-2 font-semibold text-white rounded-md w-full hover:text-opacity-90 mt-5"
          @click="deleteProduct(p.title)">
          REMOVE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: function () { },
    },
    isClothes: {
      type: Boolean,
      default: true,
    },
    target: {
      type: String,
      default: '#',
    },
    isCart: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async deleteProduct(product) {
      await this.$localForage.removeItem(product)
      window.location.reload()
    },
  },
}
</script>