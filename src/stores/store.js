// import { def } from '@vue/shared'
// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    selectedTab: 'All',
    searchQuery: ''
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setSelectedTab(state, tab) {
      state.selectedTab = tab
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    markPaid(state, user) {
      user.paymentStatus = 'Paid'
    }
  },
  actions: {
    fetchUsers({ commit }) {
      // call the API endpoint to fetch the user data
      // commit the setUsers mutation with the result
    },
    markPaid({ commit }, user) {
      // call the mark-paid API endpoint with the user ID
      // commit the markPaid mutation with the user object
    }
  },
  getters: {
    filteredUsers(state) {
      // filter the users list based on the selected tab and search query
      // return the filtered list
    },
    payableAmount(state, getters) {
      // compute the total payable amount based on the filtered list
      // return the result
    }
  }
})
export default store;