<template>
  <div class="volume-panel">
    <volume-value
      style="position: absolute; top: -35px; left: 18px;"
    ></volume-value>
    <volume-bar></volume-bar>
    <volume-icon :icon="$store.getters.getIcon"></volume-icon>
  </div>
</template>

<script>
  import VolumeBar from './VolumeBar.vue';
  import VolumeIcon from './VolumeIcon.vue';
  import VolumeValue from './VolumeValue.vue';

  export default {
    name: 'VolumePanel',
    components: {
      VolumeValue,
      VolumeIcon,
      VolumeBar,
    },
  };
</script>

<style scoped>
  .volume-panel {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 60px;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
