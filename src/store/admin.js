import axios from 'axios'
const { VITE_API_KEY, VITE_USERNAME } = import.meta.env

export default {
  namespaced: true,
  state: {
    productList: [],
    transactionDetail: [],
  },
  mutations: {
    setProductList(state, payload) {
      state.productList = payload
    },
    setTransactionDetail(state, payload) {
      state.transactionDetail = payload
    },
  },
  actions: {
    async readProducts({ commit }) {
      try {
        const res = await request('', 'GET')
        commit('setProductList', res)
      } catch (err) {
        console.log(err)
      }
    },
    async readTransactionDetail({ commit }) {
      try {
        const res = await request('/transactions/all', 'GET')
        commit('setTransactionDetail', res)
      } catch (err) {
        console.log(err)
      }
    },
  },
}

async function request(url = '', method) {
  const { data } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products${url}`,
    method,
    headers: {
      'content-type': 'application/json',
      apikey: VITE_API_KEY,
      username: VITE_USERNAME,
      masterKey: true,
    },
  })
  return data
}
