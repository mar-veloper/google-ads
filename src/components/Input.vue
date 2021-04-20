<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    @input="changeVal($event.currentTarget.value, seq, modelVal)"
    :type="type"
    :maxlength="maxChar"
  />
  <span>{{ modelVal?.[seq]?.length || 0 }}/{{ maxChar }}</span>
</template>
<script>
import inputProps from '../commonProps/input.js';

export default {
  name: 'Input',
  props: {
    ...inputProps,
  },
  methods: {
    changeVal(val, key, modelVal) {
      this.$emit('update:modelValue', { ...modelVal, [key]: val.trim() });
    },
  },
};
</script>
<style></style>
