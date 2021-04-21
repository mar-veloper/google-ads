<template>
  <label>{{ label }}</label>
  <textarea
    v-bind="$attrs"
    @input="changeModelVal($event.currentTarget.value, seq, sec, modelVal)"
    :maxlength="maxChar"
  />
  <span>{{ modelVal?.[seq]?.length || 0 }}/{{ maxChar }}</span>
</template>
<script>
import inputProps from '../common/props/input.js';
import inputMethods from '../common/methods/input.js';

export default {
  name: 'Textarea',
  props: {
    ...inputProps,
  },
  methods: {
    ...inputMethods,
  },
};
</script>
<style scoped></style>
