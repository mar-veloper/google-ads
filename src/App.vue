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
  <p>{{ joinStrings(modelVal.headlines, ' | ') }}</p>
  <p>{{ joinStrings(modelVal.descriptions, ' ') }}</p>
  <p>{{ joinStrings(modelVal.paths) }}</p>
</template>

<script>
import Section from './components/Section';

import data from './data.json';
import createSchema from './helper/createSchema';
import createModelVal from './helper/createModelVal';

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
    };
  },

  computed: {
    isFormValidated() {
      return this.validateForm();
    },
    validatedMessage() {
      const isValidated = this.validateForm();
      const message = isValidated ? 'Ad is ready to be published!' : '';
      console.log(isValidated);

      return message;
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
