<template>
  <div>
    <label>Headline 1</label>
    <input
      type="text"
      ref="firstHeading"
      :value="value.first"
      @input="updateValue()"
    />
    <input
      type="text"
      ref="secondHeading"
      :value="value.second"
      @input="updateValue()"
    />
    <input
      type="text"
      ref="thirdHeading"
      :value="value.third"
      @input="updateValue()"
    />
    <!-- <span>{{ headline1.length }}/90</span> -->
  </div>
</template>
<script>
export default {
  name: 'Editor',
  props: ['value'],
  methods: {
    updateValue() {
      this.$emit('input', {
        first: this.$refs.firstHeading.value,
        second: this.$refs.secondHeading.value,
        third: this.$refs.thirdHeading.value,
      });
    },
  },
};
</script>
<style></style>
