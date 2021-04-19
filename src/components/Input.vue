<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="text"
      :maxlength="maxChar"
      @input="changeVal($event.target.value)"
    />
    <span>{{ inputVal.length }}/{{ maxChar }}</span>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    inputVal: String,
    label: String,
    maxChar: Number,
  },
  methods: {
    changeVal(val) {
      this.$emit('update:modelValue', val);
    },
  },
};
</script>
<style></style>
