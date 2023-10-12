<template>
  <section
    :class="[classes, 'py-10 mx-auto md:px-0', primary ? 'bg-secondary text-primary' : 'bg-background text-secondary']">
    <h2 class="text-3xl px-5 mb-10 font-semibold">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'Title',
    },
    title: {
      type: String,
      default: 'Title',
    },
    primary: {
      type: Boolean,
      default: true,
    },
  },
}
</script>