import * as types from './mutation-type'
/**
 *
 export const ADD_TO_CART = 'ADD_TO_CART'
 export const CHANGE_CART_NUM = 'CHANGE_CART_NUM'
 export const DELETE = 'DELETE'
 export const CLEAR = 'CLEAR'
 */
const actions = {
  addToCart ({ commit }, cartList) {
    console.log('11')
    commit(types.ADD_TO_CART, {
      id: cartList.id
    })
  },
  deletePro ({commit}, product) {
    commit(types.DELETE, product)
  },
  clear ({commit}) {
    commit(types.CLEAR)
  },
  changeCartNum ({commit}, data) {
    commit(types.CHANGE_CART_NUM, data)
  }
}
export default actions
