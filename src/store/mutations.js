import * as types from './mutation-type'
/**
 *
 export const ADD_TO_CART = 'ADD_TO_CART'
 export const CHANGE_CART_NUM = 'CHANGE_CART_NUM'
 export const DELETE = 'DELETE'
 export const CLEAR = 'CLEAR'
 *
 */

const mutation = {
// 增加商品到购物车
  [types.ADD_TO_CART] (state, {id}) {
    const index = state.added.findIndex(item => item.id === id)
    if (index !== -1) {
      state.added[index].num++
    } else {
      state.added.push({
        id,
        num: 1
      })
    }
  },

  // 改变购物车商品
  [types.CHANGE_CART_NUM] (state, {id, value}) {
    state.added.forEach((item, index) => {
      if (item.id === id) {
        item.num = value
      }
    })
  },

  // 删除购物车商品
  [types.DELETE] (state, product) {
    state.added.forEach((item, index) => {
      if (item.id === product.id) {
        state.added.splice(index, 1)
      }
    })
  },

  // 清空购物车
  [types.CLEAR] (state) {
    state.added = []
  }
}

export default mutation
