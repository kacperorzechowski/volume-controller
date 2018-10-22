/* eslint-disable no-param-reassign,default-case,vue/script-indent */
import { icons, iconsLevels } from '../../config/icons';

export default {
  state: {
    level: 27,
  },
  mutations: {
    changeVolume: (state, { type, value }) => {
      switch (type) {
        case 'INCREASE':
          state.level += value;
          break;
        case 'DECREASE':
          state.level -= value;
          break;
      }
    },
  },
  actions: {
    increaseVolume: ({ commit }, value) => {
      commit('changeVolume', {
        type: 'INCREASE',
        value,
      });
    },
    decreaseVolume: ({ commit }, value) => {
      commit('changeVolume', {
        type: 'DECREASE',
        value,
      });
    },
  },
  getters: {
    getLevel: ({ level }) => (level),
    getIcon: (state, getters) => {
      let currentIcon = icons.mute;

      if (getters.getLevel > iconsLevels.low) {
        currentIcon = icons.low;
      }

      if (getters.getLevel > iconsLevels.medium) {
        currentIcon = icons.medium;
      }

      if (getters.getLevel > iconsLevels.high) {
        currentIcon = icons.high;
      }

      return currentIcon;
    },
  },
};
