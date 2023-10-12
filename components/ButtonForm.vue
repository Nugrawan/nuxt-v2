<template>
  <div class="w-full">
    <button :type="{ type }"
      class="shadow-lg px-3 py-2 mt-3 text-primary hover:bg-opacity-90 bg-secondary font-semibold rounded-xl w-full">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Submit'
    },
    type: {
      type: String,
      default: 'submit'
    }
  }
}
</script>