<template>
  <div>
    <transition name="fade" appear>
      <img class="icon" :src="iconPath" :key="iconPath"/>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import high from './../../assets/volume/volume-high.svg';
  import medium from './../../assets/volume/volume-medium.svg';
  import low from './../../assets/volume/volume-low.svg';
  import mute from './../../assets/volume/volume-mute.svg';

  export default {
    name: 'VolumeIcon',
    data: () => ({
      icons: {},
    }),
    computed: {
      ...mapGetters([
        'getIcon',
      ]),
      iconPath() {
        return this.icons[this.getIcon];
      },
    },
    beforeMount() {
      this.icons = {
        high,
        medium,
        low,
        mute,
      };
    },
  };
</script>

<style scoped>
  .icon {
    width: 60px;
    height: 48px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.10);
  }

  .fade-enter-active {
    transition: opacity .8s;
  }

  .fade-leave-to, .fade-leave-active {
    display: none
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
