<template>
  <h1>New Ad</h1>
  <form>
    <div v-for="(sec, index) of sections" :key="`${index}-${sec}`">
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
  <CardDeck v-if="activeAds.length" title="Active Ads" :items="activeAds" />
</template>

<script>
import Section from './components/Section';
import Card from './components/Card';
import Button from './components/Button';
import CardDeck from './components/CardDeck';

import data from './data.json';
import { createSchema, createModelVal } from './helper';

export default {
  name: 'App',
  components: {
    Section,
    Card,
    Button,
    CardDeck,
  },
  data() {
    return {
      modelVal: {},
      staticData: null,
      sections: null,
      isFormValidated: false,
      activeAds: [],
    };
  },
  mounted() {
    this.modelVal = createModelVal(data.sections, data.staticData);
    this.staticData = data.staticData;
    this.sections = data.sections;

    if (localStorage.getItem('activeAds')) {
      try {
        this.activeAds = JSON.parse(localStorage.getItem('activeAds'));
      } catch (err) {
        localStorage.removeItem('activeAds');
      }
    }
  },
  updated() {
    this.isFormValidated = this.validateForm();
  },
  computed: {
    validatedMessage() {
      const message = this.isFormValidated
        ? 'Ad is ready to be published!'
        : '';
      return message;
    },
  },
  methods: {
    validateForm() {
      const modelValSchema = createSchema(this.sections, this.staticData);
      const { error } = modelValSchema.validate(this.modelVal);
      return !error;
    },

    handleOnSubmit() {
      this.activeAds = [this.modelVal, ...this.activeAds];
      localStorage.setItem('activeAds', JSON.stringify(this.activeAds));
      this.modelVal = createModelVal(data.sections, data.staticData);
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
  box-sizing: border-box;
  width: 600px;
  border-radius: 0.3rem;
  box-shadow: rgba(136, 165, 191, 0.48) 0px 0px 0px 1px inset,
    rgba(136, 165, 191, 0.9) 0px 0px 0px 1px;
}
</style>
