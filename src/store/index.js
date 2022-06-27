import { createStore } from 'vuex'

export default createStore({
  state: {
    popUp: false,
    mobileHeader: false,
  },
  getters: {
    popUp: state => state.popUp,
    mobileHeader: state => state.mobileHeader,
  },
  mutations: {
    setPopUp(state, payload) {
      state.popUp = payload
    },
    setMobileHeader(state) {
      state.mobileHeader = !state.mobileHeader
    },
  },
  actions: {
    setPopUp({ commit }, payload) {
      commit('setPopUp', payload)
    },
    setMobileHeader({ commit }) {
      commit('setMobileHeader')
    },
  },
})