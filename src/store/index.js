import { createStore } from 'vuex'

export default createStore({
  state: {
    popUp: false,
  },
  getters: {
    popUp: state => state.popUp,
  },
  mutations: {
    setPopUp(state, payload) {
        state.popUp = payload
    }
  },
  actions: {
    setPopUp({ commit }, payload) {
        commit('setPopUp', payload)
    }
  },
})