<template>
  <h1 @click="log">New Ad</h1>

  <form @submit="e => handleOnSubmit(e)">
    <div v-for="sec of sections" :key="sec.path">
      <Section
        v-model="modelVal[sec.path]"
        :title="sec.label"
        :sec="sec.path"
        :items="staticData[sec.path]"
        :modelVal="modelVal[sec.path]"
      />
    </div>
    <button>Create Ad</button>
  </form>
  <p>{{ joinStrings(modelVal.headlines, ' | ') }}</p>
  <p>{{ joinStrings(modelVal.descriptions, ' ') }}</p>
  <p>{{ joinStrings(modelVal.paths) }}</p>
</template>

<script>
import Section from './components/Section';
import data from './data.json';

export default {
  name: 'App',
  components: {
    Section,
  },
  data() {
    return {
      modelVal: {
        headlines: null,
        descriptions: null,
        paths: null,
      },
      staticData: data.staticData,
      sections: data.sections,
    };
  },
  methods: {
    joinStrings(items, joinWith = '/') {
      if (!items) return;
      return Object.values(items)
        .filter(item => item)
        .join(`${joinWith}`);
    },

    handleOnSubmit(e) {
      e.preventDefault();
      console.log('Hello World');
    },
  },
};
</script>
