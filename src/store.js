import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

let _api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Jaker1',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    notes: [],
    activeBug: {}
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    addBug(state, data) {
      state.bugs.push(data)
    },
    addNote(state, data) {
      state.notes = data
    },
    setNotes(state, data) {
      state.notes = data
    },
    setActive(state, data) {
      state.activeBug = data
    }
  },
  actions: {
    createBug({ commit, dispatch }, payload) {
      _api.post('bugs', payload)
        .then(res => {
          console.log(res.data)
          commit('addBug', res.data.results)
        })
    },
    getBugs({ commit, dispatch }) {
      _api.get('bugs/')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getBug({ commit, dispatch }, payload) {
      _api.get('bugs/' + payload)
        .then(res => {
          commit('setActiveBug', res.data.results)
        })
    },
    deleteBug({ commit, dispatch }, payload) {
      _api.delete('bugs/' + payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    createNote({ commit, dispatch }, payload) {
      _api.post('bugs/' + payload.bug + '/notes', payload)
        .then(res => {
          dispatch('getNotes', res.data.results.bug)
        })
    },
    getNotes({ commit, dispatch }, bugId) {
      _api.get('bugs/' + bugId + '/notes')
        .then(res => {
          console.log(res.data)
          commit('setNotes', res.data.results)
        })
    },
    deleteNote({ commit, dispatch }, payload) {

      _api.delete('/bugs/' + payload.bug + '/notes/' + payload.id)
        .then(res => {
          dispatch('getNotes', payload.bug)
        })
    }
  }
})
