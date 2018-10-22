/* eslint-disable no-param-reassign,default-case,vue/script-indent */
export default {
  state: {
    level: 27,
    icons: {
      mute: 'mute',
      low: 'low',
      medium: 'medium',
      high: 'high',
    },
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
      commit('changeVolume', { type: 'INCREASE', value });
    },
    decreaseVolume: ({ commit }, value) => {
      commit('changeVolume', { type: 'DECREASE', value });
    },
  },
  getters: {
    getLevel: ({ level }) => (level),
    getIcon: ({ icons }, getters) => {
      let currentIcon = icons.mute;

      if (getters.getLevel > 0) {
        currentIcon = icons.low;
      }

      if (getters.getLevel > 30) {
        currentIcon = icons.medium;
      }

      if (getters.getLevel > 60) {
        currentIcon = icons.high;
      }

      return currentIcon;
    },
  },
};
