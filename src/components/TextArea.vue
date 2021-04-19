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
export default {
  name: 'Textarea',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    inputVal: String,
    label: String,
    maxChar: Number,
    modelVal: Object,
    seq: String,
  },
  methods: {
    changeModelVal(val, key, modelVal) {
      this.$emit('update:modelValue', { ...modelVal, [key]: val.trim() });
    },
  },
};
</script>
<style scoped></style>
