<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    @input="changeModelVal($event.currentTarget.value, seq, sec, modelVal)"
    :value="modelVal?.[seq]"
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
<style scoped>
input {
  padding: 8px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  border: 0.01rem solid grey;
  border-radius: 0.3rem;
}
</style>
