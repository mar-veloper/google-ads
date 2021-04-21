<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    @input="changeModelVal($event.currentTarget.value, seq, sec, modelVal)"
    :type="type"
    :maxlength="maxChar"
  />
  <span>{{ modelVal?.[seq]?.length || 0 }}/{{ maxChar }}</span>
</template>
<script>
import inputProps from '../common/props/input.js';
import inputMethods from '../common/methods/input.js';

export default {
  name: 'Input',
  props: {
    ...inputProps,
  },
  methods: {
    ...inputMethods,
  },
};
</script>
<style></style>
