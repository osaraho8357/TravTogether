import {getters, mutations, actions} from '@/store/modules/user/methods'

export const state = {
  user: null,
  retrievedUser: null,
  userList: [],
}


export const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}