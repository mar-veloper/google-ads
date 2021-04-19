<template>
  <h1 @click="log">New Ad</h1>

  <form action="">
    <div v-for="sec of sections" :key="sec.path">
      <Section
        v-model="stateData[sec.path]"
        :title="sec.label"
        :sec="sec.path"
        :items="staticData[sec.path]"
        :modelVal="stateData[sec.path]"
      />
    </div>
  </form>
  <p>
    {{ joinStrings(stateData.headlines, '|') }}
  </p>
  <p>{{ stateData.descriptions }}</p>
  <p>{{ stateData.paths }}</p>
</template>

<script>
import data from './data.json';

// import Input from './components/Input';
import Section from './components/Section';

export default {
  name: 'App',
  components: {
    // Input,
    Section,
  },
  data() {
    return {
      stateData: { headlines: null, descriptions: null, paths: null },
      staticData: null,
      sections: null,
    };
  },
  created() {
    this.$data.staticData = data.staticData;
    this.$data.sections = data.sections;
  },
  methods: {
    joinStrings(items, spesChar = '/') {
      if (!items) return;
      return Object.values(items)
        .filter(item => item)
        .join(` ${spesChar} `);
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
