import axios from 'axios'
import slugify from 'slugify'
import {
  LOCALHOST, USERSURL, AUTHENTICATIONURL
} from "@/store/modules/user/urls"

export const getters = {
  isAuthenticated: state => !!state.user,
  // =====================================================
  getUser: state => state.user,
  // =====================================================
  getRetrievedUser: state => state.retrievedUser,
  // =====================================================
  getAllUsers: state => state.userList,
  // =====================================================
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setAllUsers(state, users) {
    state.userList = users
  },
  logout(state) {
    state.user = null
  },
  setRetrievedUser(state, user) {
    state.retrievedUser = user
  },
}

export const actions = {
  async RegisterNewUser({commit}, User) {
    const userForm = new FormData();
    userForm.append('email', User.email)
    userForm.append('nickname', User.nickname)
    userForm.append('gender', User.gender)
    userForm.append('age', User.age)
    userForm.append('ethnicity', User.ethnicity)
    userForm.append('location', User.location)
    userForm.append('fromFirebase', User.fromFirebase)
    userForm.append('userPhotoURL', User.userPhotoURL)
    userForm.append('password', User.password)
    await commit('getUser')
    try {
      await axios.post(USERSURL, userForm)
      console.log('A new user registered')
    } catch (error) {
      console.log(error.message + " ERROR REGISTRATION USER")
    }
  },
  // =====================================================
  async UpdateUser({commit, state}, userForm) {
    const newForm = new FormData()
    newForm.append('email', userForm.email)
    newForm.append('nickname', userForm.nickname)
    newForm.append('slug', userForm.slug)
    newForm.append('gender', userForm.gender)
    newForm.append('age', userForm.age)
    newForm.append('ethnicity', userForm.ethnicity)
    newForm.append('location', userForm.location)
    newForm.append('bio', userForm.bio)
    let password = userForm.password
    if (userForm.password == null) {
      if (state.user) {
        password = state.user.password
      }
    }
    newForm.append('password', password)
    try {
      const response = await axios.put(USERSURL+userForm.slug+'/', newForm)
      await commit('setUser', response.data)
    } catch (error) {
      console.log(error.message + " ERROR UPDATING USER")
    }
  },
  // =====================================================
  async RetrieveUser({commit}, slug) {
    // const slugForm = new FormData()
    // slugForm.append('slug', slug)
    try {
      const response = await axios.get(USERSURL+slug)
      commit('setRetrievedUser', response.data)
    } catch (error) {
      console.log(error.message + " ERROR RETRIEVING USER")
    }
  },
  // =====================================================
  async GetAllUsers({commit}) {
    try {
      const response = await axios.get(USERSURL)
      commit('setAllUsers', response.data)
    } catch (error) {
      console.log(error.message + " ERROR GETTING ALL USER")
    }
  },
  // =====================================================
  async Login({dispatch}, User) {
    const userForm = new FormData()
    userForm.append('email', User.email)
    userForm.append('password', User.password)
    // await axios.post(AUTHENTICATIONURL, userForm)
    try {
      await axios.post(AUTHENTICATIONURL, userForm)
      await dispatch('GetUser', userForm)
    } catch (error) {
      console.log(error.message + " ERROR LOGINNING IN")
    }
  },
  // =====================================================
  async GetUser({commit}, userForm) {
    let slug = slugify(userForm.get('email').split('@')[0])
    slug = slug.replaceAll('.', '')
    try {
      const response = await axios.get(USERSURL+slug)
      await commit('setUser', response.data)
    } catch (error) {
      console.log(error.message + " ERROR GETTING USER")
    }
  },
  // =====================================================
  Logout({commit}) {
    commit('logout')
  },
  // =====================================================
  async Contact(contactForm) {
    const messageForm = new FormData()
    messageForm.append('name', contactForm.name)
    messageForm.append('email', contactForm.email)
    messageForm.append('message', contactForm.message)
    try {
      await axios.post(LOCALHOST+"/contact/", messageForm)
    } catch(error) {
      console.log(error.message + " ERROR SENDING MESSAGE")
    }
  },
  async SendMessage(Form) {
    const messageForm = new FormData()
    messageForm.append('subject', Form.subject)
    messageForm.append('message', Form.message)
    messageForm.append('sender', Form.sender)
    messageForm.append('receiver', Form.receiver)
    try {
      await axios.post(LOCALHOST+"/sendMessage/", messageForm)
    } catch (error) {
      console.log(error.message + " ERROR SENDING MESSAGE")
    }
  }
}