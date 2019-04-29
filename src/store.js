import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: localStorage.getItem('login') || false,
    barang: null,
    // token: '',
  },
  mutations: {
    isLogin(state, data) {
      state.login = data;
    },
    barang(state, data) {
      state.barang = data;
    },
    addBarang() {
      dispatch('getBarang')
    },
    clear(state) {
      state.login = false;
      state.barang = null;
    },
    updateBarang(state, payload) {
      state.barang = state.barang.map((bara) => {
        if(bara.id_barang === payload.id_barang) {
          return Object.assign({}, bara, payload.data)
        }
        return bara
      })
    }
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          email: data.email,
          password: data.password,
        })
          .then((response) => {
            resolve(response);
            commit('isLogin', true);
            // commit('token', response.data.data.token);

            localStorage.setItem('id_user', response.data.data.id);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('login', true);
          })
          .catch((error) => {
            reject(error);
            commit('isLogin', false);
            commit('token', '');
            localStorage.setItem('id_user', '');
            localStorage.setItem('token', '');
            localStorage.setItem('login', false);
          });
      });
    },
    logout(context) {
      if(context.getters.isLogin) {
        return new Promise((resolve, reject) => {
          axios.get('/logout', {
            params: {
              token: localStorage.getItem('token')
            }
          })
          .then(response => {
            resolve(response)
            context.commit('clear');
            localStorage.removeItem('token');
            localStorage.removeItem('id_user');
            localStorage.removeItem('login');
          })
          .catch(error => {
            reject(error)
          })
        });
      }
    },
    getBarang({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get('/barang', {
          params: {
            id: localStorage.getItem('id_user'),
            token: localStorage.getItem('token'),
          },
        })
          .then((response) => {
            resolve(response);
            commit('barang', response.data.data);
          })
          .catch((error) => {
            reject(error);
            commit('barang', '');
          });
      });
    },
    addBarang({commit, state, dispatch}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/barang', data, {
          params: {
            token: localStorage.getItem('token'),
          }
        })
        .then(response => {
          resolve(response)
          dispatch('getBarang')
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    showBarang({commit, state}, id) {
      return new Promise((resolve, reject) => {
        axios.get('/barang/' + id, {
          params: {
            token: localStorage.getItem('token'),
          }
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    editBarang({commit, state, dispatch}, {dataBarang, id}) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/barang/${id}`,
          method: 'PUT',
          data: dataBarang,
          params: {
            token: localStorage.getItem('token'),
          }
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    deleteBarang({state}, id) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/barang/${id}`,
          method: 'DELETE',
          data: id,
          params: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {
    isLogin(state) {
      return state.login;
    },
    getBarang(state) {
      return state.barang;
    },
  },
});
