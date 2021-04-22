<template>
  <button>
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true,
      default: 'Provide button label!',
    },
  },
};
</script>
<style scoped>
button {
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  text-transform: uppercase;
  margin: 1rem 0;
  border-radius: 0.3rem;
  border: none;
  background-color: rgba(3, 102, 214, 0.3);
}
</style>
