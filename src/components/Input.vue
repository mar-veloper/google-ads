<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="text"
      :maxlength="maxChar"
      @input="changeVal($event.target.value)"
    />
    <span>{{ inputVal.length }}/90</span>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    inputVal: String,
    label: String,
    maxChar: String,
  },
  methods: {
    changeVal(val) {
      this.$emit('update:modelValue', val);
    },
  },
};
</script>
<style></style>
