<template>
  <div>
    <div class="volume-value-text">
      {{ getLevel }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'VolumeValue',
    computed: {
      ...mapGetters([
        'getLevel',
      ]),
    },
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Encode+Sans:200');

  .volume-value-text {
    font-family: 'Encode Sans', sans-serif;
    font-size: 24px;
    font-weight: 200;
    color: #FFFFFF;
    letter-spacing: 0;
    text-shadow: 0 0 15px rgba(0,0,0,0.20);
  }
</style>
