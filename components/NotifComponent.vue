<template>
  <div class="text-red-500 p-1 text-center">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ['message'],
}
</script>