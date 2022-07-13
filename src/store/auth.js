import axios from 'axios'
const { VITE_API_KEY, VITE_USERNAME } = import.meta.env

const END_POINT =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth'

const headers = {
  'content-type': 'application/json',
  apikey: VITE_API_KEY,
  username: VITE_USERNAME,
}

export default {
  namespaced: true,
  state() {
    return {
      user: {},
      token: null,
      logined: null,
      findAdmin: false,
      img: null,
    }
  },
  mutations: {
    setUser(state, payload) {
      for(const key in payload) {
        state[key] = payload[key]
      }
      console.log(state)
    }
  },
  getters: {
    userId(state) {
      return state.user
    },
    token(state) {
      return state.token
    },
    isAuthenticated(state) {
      return !!state.token
    },
  },
  actions: {
    async login({commit}, payload) {
      const {data} = await axios({
        url: `${END_POINT}/login`,
        method: 'POST',
        headers: {
          ...headers,
        },
        data: payload,
      }).catch((error) => {
        console.log(error)
      })
      window.localStorage.setItem('token',data.accessToken)
      commit('setUser', {user: data.user})
    },
    async signup({commit}, payload) {
      const {data} = await axios({
        url: `${END_POINT}/signup`,
        method: 'POST',
        headers: {
          ...headers,
        },
        data: payload,
      }).catch((error) => {
        console.log(error)
      })
      commit('setUser', {user: data.user})
    },

    async logOut() {
      const accessToken = window.localStorage.getItem('token')
      await axios({
        url: `${END_POINT}/logout`,
        method: 'POST',
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      }).catch((error) => {
        console.log(error)
      }) 
      window.localStorage.clear()
    },
    async changeProfile({commit}, payload) {
      const accessToken = window.localStorage.getItem('token')
      const {data} = await axios({
        url: `${END_POINT}/user`,
        method: 'PUT',
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
        data: payload,
      })
      commit('setUser', {user: data.user})
    },
    findLocalStorageUser({commit}) {
      const accessToken = window.localStorage.getItem('token')
      if (accessToken == null) {
        commit('setUser', {logined: false})
      } else {
        commit('setUser', {logined: true})
      }
    },
    async authenticationCheck({ commit }) {
      const accessToken = window.localStorage.getItem('token')
      const { data } = await axios({
        url: `${END_POINT}/me`,
        method: 'POST',
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      commit('setUser', { user: data }, {findAdmin: data.email.includes('admin')})
    },
    deleteAdminInfo({commit}) {
      commit('setUser', {findAdmin: false})
    }
  }
}

