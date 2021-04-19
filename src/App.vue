<template>
  <h1>New Ad</h1>

  <form action="">
    <h2>Heading</h2>
    <div v-for="item of staticData.headlines" :key="item">
      <Input
        v-model="stateData.headlines[item.seq]"
        :maxChar="item.maxChar"
        :label="item.label"
        :inputVal="stateData.headlines[item.seq]"
      />
    </div>
  </form>
  <p>{{ headlines.first }}</p>
  <p>{{ headlines.second }}</p>
  <p>{{ headlines.third }}</p>
</template>

<script>
import Input from './components/Input';
import data from './data.json';

export default {
  name: 'App',
  components: {
    Input,
  },
  data() {
    return {
      stateData: null,
      staticData: null,
    };
  },
  created() {
    this.$data = data.stateData;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
