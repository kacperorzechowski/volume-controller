<template>
  <div>
    <transition name="slide-fade">
      <volume-panel v-show="isVisible"></volume-panel>
    </transition>
  </div>
</template>

<script>
  /* eslint-disable no-useless-return */
  import { mapGetters } from 'vuex';
  import VolumePanel from './VolumePanel.vue';

  export default {
    name: 'VolumeController',
    components: { VolumePanel },
    data: () => ({
      isVisible: false,
      shouldChangeVolume: false,
      minLevel: 0,
      maxLevel: 100,
      toggleVisible: null,
      visibleTime: 2,
    }),
    computed: {
      ...mapGetters([
        'getLevel',
      ]),
    },
    created() {
      window.addEventListener('keydown', ({ code }) => this.handleKeyDown(code));
    },
    methods: {
      /**
       * Handles the key down event.
       * @param {string} code [ArrowUp|ArrowDown] - arrow up/down key code.
       */
      handleKeyDown(code) {
        if (code !== 'ArrowUp' && code !== 'ArrowDown') {
          return;
        }
        let action = 'increaseVolume';

        if (this.isVisible) {
          this.shouldChangeVolume = true;
        }

        this.manageVisibility();

        if (code === 'ArrowDown') {
          action = 'decreaseVolume';
        }

        if (this.shouldChangeVolume) {
          this.changeVolumeLevel(1, action);
        }
      },
      /**
       * Calls vuex action and changes volume level by given value and action.
       * @param {int} value - value to increase/decrease volume level by.
       * @param {string} action [decreaseVolume|increaseVolume]
       * - vuex action that updates volume level.
       */
      changeVolumeLevel(value, action) {
        if (this.canChangeVolume(action)) {
          this.$store.dispatch(action, value);
        }
      },
      /**
       * Determines if provided action can be executed.
       * @param {string} action [decreaseVolume|increaseVolume]
       * - vuex action that updates volume level.
       * @returns {boolean}
       */
      canChangeVolume(action) {
        return (this.getLevel < this.maxLevel && this.getLevel > this.minLevel)
          || (this.getLevel === this.maxLevel && action === 'decreaseVolume')
          || (this.getLevel === this.minLevel && action === 'increaseVolume');
      },
      /**
       * Handles the volume panel visibility.
       */
      manageVisibility() {
        clearTimeout(this.toggleVisible);
        this.isVisible = true;
        this.toggleVisible = setTimeout(() => {
          this.isVisible = false;
          this.shouldChangeVolume = false;
          this.toggleVisible = null;
        }, this.visibleTime * 1000);
      },
    },
  };
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
