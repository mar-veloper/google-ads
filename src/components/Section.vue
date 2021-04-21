<template>
  <div class="form-section">
    <h2>{{ title }}</h2>
    <div class="form-section__input" v-for="item of items" :key="item.seq">
      <Textarea
        v-if="item.isTextarea"
        v-bind="$attrs"
        :modelVal="modelVal"
        :maxChar="item.maxChar"
        :label="item.label"
        :seq="item.seq"
        :sec="sec"
      />

      <Input
        v-else
        v-bind="$attrs"
        :modelVal="modelVal"
        :maxChar="item.maxChar"
        :label="item.label"
        :seq="item.seq"
        :sec="sec"
      />
    </div>
  </div>
</template>
<script>
import Input from './Input';
import Textarea from './TextArea';

export default {
  name: 'Section',
  components: {
    Input,
    Textarea,
  },
  props: {
    title: String,
    sec: String,
    items: Object,
    modelVal: Object,
  },
};
</script>
<style scoped>
h2 {
  padding: 0;
  margin: 0 0 1rem;
  font-size: 1.2rem;
  font-weight: 400;
}
.form-section {
  padding: 0.5rem 1rem;
  letter-spacing: 0.02rem;
  font-weight: 300;
}
.form-section__input {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;
}
</style>
