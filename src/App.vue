<template>
  <div id="app">
    <dashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'app',
  components: {
    Dashboard,
  },
};
</script>
