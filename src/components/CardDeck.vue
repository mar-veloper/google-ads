<template>
  <h2>{{ title }}</h2>
  <div v-for="(item, index) of items" :key="index">
    <Card :modelVal="item" />
  </div>
</template>
<script>
import Card from './Card';

export default {
  name: 'CardDeck',
  components: {
    Card,
  },
  props: {
    title: String,
    items: Array,
  },
};
</script>
