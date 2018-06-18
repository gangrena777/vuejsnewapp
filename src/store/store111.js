import Vue from 'vue'
import Vuex from 'vuex'

import {firebaseMutation} from 'vuexfire'
import {firebaseAction}  from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store({

	// mutations:{ ...firebaseMutation},
	 // mutations: VuexFire.firebaseMutations,
       strict: true,
      state:{
      	menuItems:[],

      	/*{
                     //1
			      1:{
						'name':"OBUHOVSKAY",
						'description':'Water from south region of country....',
						'options':[
						{
						'size':'0,5 L',
						'price':'1'
					    },
					    {
					    	'size':'1 L',
					    	'price':"1.5"
					    },
					    {
					    	'size':'2 L',
					    	'price':'2'
					    },
					    {
					    	'size':'5 L',
					    	'price':'3.5'
					    }
					    ]
				 },//2
				 2:{

				 		'name':"MIRGORODSKAYA",
						'description':'Water from noth region of country....',
						'options':[
						{
						'size':'0,5 L',
						'price':'2'
					    },
					    {
					    	'size':'1 L',
					    	'price':"2.5"
					    },
					    {
					    	'size':'2 L',
					    	'price':'3'
					    },
					    {
					    	'size':'5 L',
					    	'price':'3.75'
					    }
					    ]
				   }
			  },*/
					///state
					orders: []
				},
					

					getters:{
						menuItemsGet: state=> state.menuItems,
						getOrders: state=> state.orders 


					},
					mutations:{
						//добавить на стр. заказов  корзину
						addOrder: (state, busket) => state.orders.push(busket),
						//очистить корзину из страницы заказов пользователя
						cancelOrder: (state, orders) => state.orders.splice(orders,1)
					},
					actions :{
                          setMenu:
                          firebaseAction( ({bindFirebaseRef}, {ref}) =>{
                          	bindFirebaseRef('menuItems', ref)
                          }),
                           setOrders:
                           firebaseAction( ({bindFirebaseRef}, {ref}) =>{
                          	bindFirebaseRef('orders', ref)
                          })


					}

				/*	  actions: {
    setTodosRef: VuexFire.firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('todos', ref)*/
               
               
				


})