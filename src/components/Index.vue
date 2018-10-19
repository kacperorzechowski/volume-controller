<template>
  <div>
    <volume-controller></volume-controller>
  </div>
</template>

<script>
  import VolumeController from './VolumePanel/VolumeController.vue';

  export default {
    name: 'Index',
    components: { VolumeController },
  };
</script>

<style scoped>

</style>
