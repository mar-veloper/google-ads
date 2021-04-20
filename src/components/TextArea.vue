<template>
  <label>{{ label }}</label>
  <textarea
    v-bind="$attrs"
    @input="changeModelVal($event.currentTarget.value, seq, modelVal)"
    :maxlength="maxChar"
  />
  <span>{{ modelVal?.[seq]?.length || 0 }}/{{ maxChar }}</span>
</template>
<script>
import inputProps from '../commonProps/input.js';

export default {
  name: 'Textarea',
  props: {
    ...inputProps,
  },
  methods: {
    changeModelVal(val, key, modelVal) {
      this.$emit('update:modelValue', { ...modelVal, [key]: val.trim() });
    },
  },
};
</script>
<style scoped></style>
