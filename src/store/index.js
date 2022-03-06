import { createStore } from 'vuex'
import products from '@/data/products'

export default createStore({
  state: {
    cart: [],
    products
  },
  getters: {
    products(state){
      return state.products
    },
    cartSize(state){
      return state.cart.length
    },
    cart(state){
      return state.cart
    },
    cartAmount(state){
      return state.cart.reduce(function (acc, obj) { return acc + obj.price; }, 0);
    }
  },
  mutations: {
    addToCart(state, payload){
      if (!state.cart.find((cart)=>cart.name === payload.name)){
        state.cart.push(state.products.find((product)=>product.name === payload.name))
      }
    }
  },
  actions: {
    addToCart(context, payload){
      context.commit('addToCart', payload);
    }
  },
  modules: {
  }
})
