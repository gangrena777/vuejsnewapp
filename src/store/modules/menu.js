

import { firebaseAction } from 'vuexfire'

const state = {
  menuItems: [],
  menuItem:[]
}

const getters = {
  getMenuItems: state => state.menuItems,
  getMenuItem: state=> state.menuItem  
}

const mutations = {
addItem: (state, Update_data) => state.menuItem.push(Update_data),
cancelUpdate:(state)=>state.menuItem = []

}

const actions = {
  setMenu: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('menuItems', ref)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}