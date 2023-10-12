<template>
  <label class="text-sm p-1 block my-2 font-semibold w-full">
    {{ label }}
    <div class="rounded-md border p-1">
      <input :value="value" :name="name" :type="type" class="outline-none w-full" :required="required"
        @input="updateValue($event)" />
    </div>
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Number],
    name: String,
    type: String,
    required: Boolean,
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
