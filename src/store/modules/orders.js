import { firebaseAction } from 'vuexfire'

const state = {
  orders: [],
  busketorders:[]
}

const mutations = {
  addOrder: (state, busket) => state.busketorders.push(busket),
  cancelBusketOrder: (state) => state.busketorders=[],
 // change_inwork:()
 
}

const getters = {
  getOrders: state => state.orders.sort( order =>order['.value'][0]['in_work']),
  getBusketOrders: state => state.busketorders,
  numberOfOrders: state => state.orders.length
}

const actions = {
  setOrders: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('orders', ref)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}