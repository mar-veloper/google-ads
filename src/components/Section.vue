<template>
  <h2>{{ title }}</h2>
  <div v-for="item of items" :key="item.seq">
    <Textarea
      v-if="item.isTextarea"
      v-bind="$attrs"
      :modelVal="modelVal"
      :maxChar="item.maxChar"
      :label="item.label"
      :seq="item.seq"
    />

    <Input
      v-else
      v-bind="$attrs"
      :modelVal="modelVal"
      :maxChar="item.maxChar"
      :label="item.label"
      :seq="item.seq"
    />
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
<style></style>
