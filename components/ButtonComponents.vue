<template>
  <NuxtLink :to="target" :class="[
    classes,
    'hover:shadow-md rounded-full w-auto font-semibold',
    primary ? 'bg-primary text-secondary' : 'bg-secondary text-primary',
    rounded
      ? 'w-fit font-bold text-lg px-3 py-2 text-center'
      : 'text-sm px-5 py-3 font-semibold',
  ]">
    {{ name }}
  </NuxtLink>
</template>
  
<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
}
</script>
  