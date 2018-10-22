<template>
  <div>
    <div class="progressbar">
      <span :style="`height: ${getLevel}%`"></span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'VolumeBar',
    computed: {
      ...mapGetters([
        'getLevel',
      ]),
    },
  };
</script>

<style scoped>
  .progressbar {
    height: 342.5px;
    width: 12.5px;
    background: rgba(24, 11, 30, 0.80);
    border-radius: 18.5px;
    padding: 2px;
    transform: rotate(180deg);
    transform-origin: center center;
  }

  .progressbar > span {
    display: block;
    border-radius: 18.5px;
    background: #fff;
    position: relative;
    overflow: hidden;
  }
</style>
