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
    <button :disabled="!isFormValidated">Create Ad</button>
  </form>
  <h3>{{ validatedMessage }}</h3>
  <p>{{ headlines }}</p>
  <p>{{ descriptions }}</p>
  <p>{{ paths }}</p>
</template>

<script>
import Section from './components/Section';

import data from './data.json';
import { createSchema, createModelVal } from './helper';

export default {
  name: 'App',
  components: {
    Section,
  },
  data() {
    return {
      modelVal: createModelVal(data.sections, data.staticData),
      staticData: data.staticData,
      sections: data.sections,
      isFormValidated: false,
    };
  },
  updated() {
    this.$data.isFormValidated = this.validateForm();
  },
  computed: {
    validatedMessage() {
      const isValidated = this.validateForm();
      const message = isValidated ? 'Ad is ready to be published!' : '';
      return message;
    },
    headlines() {
      return this.joinStrings(this.modelVal.headlines, ' | ');
    },
    descriptions() {
      return this.joinStrings(this.modelVal.descriptions, ' ');
    },
    paths() {
      return this.joinStrings(this.modelVal.paths);
    },
  },
  methods: {
    joinStrings(items, joinWith = '/') {
      if (!items) return;
      return Object.values(items)
        .filter(item => item)
        .join(`${joinWith}`);
    },

    validateForm() {
      const paths = data.sections.map(({ path }) => path);
      const staticData = data.staticData;
      const modelValSchema = createSchema(paths, staticData);

      const { error } = modelValSchema.validate(this.modelVal);
      return !error;
    },

    handleOnSubmit(e) {
      e.preventDefault();
      console.log('Hello World');
    },
  },
};
</script>
