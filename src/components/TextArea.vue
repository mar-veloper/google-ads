<template>
  <label>{{ label }}</label>
  <textarea
    v-bind="$attrs"
    @input="changeModelVal($event.currentTarget.value, seq, sec, modelVal)"
    :value="modelVal?.[seq]"
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
<style scoped>
textarea {
  padding: 8px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
  font: inherit;
}
</style>
