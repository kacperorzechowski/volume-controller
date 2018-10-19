<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
  import Index from './components/Index.vue';

  export default {
    name: 'app',
    components: { Index },
  };
</script>

<style lang="scss">
  body {
    background: url('./assets/stream-placeholder.jpg') no-repeat;
    background-size: cover;
  }
</style>
