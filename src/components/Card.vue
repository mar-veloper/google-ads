<template>
  <div>
    <h4>{{ headlines }}</h4>
    <a :href="paths">Ad · {{ paths }}</a>
    <p>{{ descriptions }}</p>
  </div>
</template>
<script>
import data from '../data.json';

export default {
  name: 'Card',
  props: {
    modelVal: Object,
  },
  computed: {
    headlines() {
      const headlines = this.joinStrings(this.modelVal.headlines, ' | ');
      const defaultValue = 'Headline 1 | Headline 2 | Headline 3';
      return headlines ? headlines : defaultValue;
    },
    descriptions() {
      const descriptions = this.joinStrings(this.modelVal.descriptions, ' ');
      const defaultValue = 'Description. Description.';
      return descriptions ? descriptions : defaultValue;
    },
    paths() {
      const url = data.staticData.url;
      const paths = this.joinStrings(this.modelVal.paths);
      const defaultValue = 'path1/path2';
      return `${url}${paths || defaultValue}`;
    },
  },
  methods: {
    joinStrings(items, joinWith = '/') {
      if (!items) return;
      return Object.values(items)
        .filter(item => item)
        .join(`${joinWith}`);
    },
  },
};
</script>
<style scoped>
div {
  box-sizing: border-box;
  max-width: 600px;
  margin: 0 0 1rem;
  padding: 1rem;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.3rem;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(136, 165, 191, 0.48) -6px -2px 16px 0px;
}

h4 {
  font-weight: 400;
  margin: 0 0 1rem;
  font-size: 1.2rem;
  color: blue;
}

a {
  margin: 0 0 1rem;
  font-size: 1rem;
  color: green;
  font-weight: 400;
  text-decoration: none;
}

p {
  color: grey;
}
</style>
