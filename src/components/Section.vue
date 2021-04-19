<template>
  <h2>{{ title }}</h2>
  <div v-for="item of items" :key="item.seq">
    <!-- <Input
      :maxChar="item.maxChar"
      :label="item.label"
      :inputVal="[sec][item.seq]"
      @input="changeVal($event.target.value)"
    /> -->

    <label>{{ item.label }}</label>
    <input
      type="text"
      :maxlength="item.maxChar"
      v-bind="$attrs"
      @input="changeVal($event.currentTarget.value, item.seq, modelVal)"
    />
    <span>{{ modelVal?.[item.seq]?.length || 0 }}/{{ item.maxChar }}</span>
  </div>
</template>
<script>
// import Input from './Input';

export default {
  name: 'Section',
  components: {
    // Input,
  },
  props: {
    title: String,
    sec: String,
    items: Object,
    modelVal: Object,
  },

  methods: {
    changeVal(val, key, modelVal) {
      this.$emit('update:modelValue', { ...modelVal, [key]: val });
    },
  },
};
</script>
<style></style>
