<template>
  <h1>New Ad</h1>
  <form>
    <div v-for="sec of sections" :key="sec.path">
      <Section
        v-model="modelVal[sec.path]"
        :title="sec.label"
        :sec="sec.path"
        :items="staticData[sec.path]"
        :modelVal="modelVal[sec.path]"
      />
    </div>
  </form>
  <h3>{{ validatedMessage }}</h3>
  <Card :modelVal="modelVal" />
  <Button
    @click.prevent="handleOnSubmit"
    :disabled="!isFormValidated"
    label="Create Ad"
  />
</template>

<script>
import Section from './components/Section';
import Card from './components/Card';
import Button from './components/Button';

import data from './data.json';
import { createSchema, createModelVal } from './helper';

export default {
  name: 'App',
  components: {
    Section,
    Card,
    Button,
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
  },
  methods: {
    validateForm() {
      const paths = data.sections.map(({ path }) => path);
      const staticData = data.staticData;
      const modelValSchema = createSchema(paths, staticData);

      const { error } = modelValSchema.validate(this.modelVal);
      return !error;
    },

    handleOnSubmit() {
      this.$data.modelVal = createModelVal(data.sections, data.staticData);
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

:root {
  font-size: 16px;
}

body,
html {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 1rem;
}

form {
  width: 600px;
  border-radius: 0.3rem;
  box-shadow: rgba(136, 165, 191, 0.48) 0px 0px 0px 1px inset,
    rgba(136, 165, 191, 0.9) 0px 0px 0px 1px;
}
</style>
