const getters = {
  // 商品列表
  goodList: state => {
    return state.goods.map(good => {
      return {
        id: good.id,
        name: good.name,
        price: good.price
      }
    })
  },
  // 购物车商品
  cartList: state => {
    return state.added.map(({id, num}) => {
      let product = state.goods.find(item => item.id === id)
      return {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price).toFixed(2),
        num,
        total_num: (product.price * num).toFixed(2)
      }
    })
  },

  // 计算总数量
  totalNum: (state, getters) => {
    let total = 0
    getters.cartList.forEach(item => {
      total += item.num
    })
    return total
  },

  // 计算总价
  totalPrice: (state, getters) => {
    let total = 0
    getters.cartList.forEach(item => {
      total += item.price * item.num
    })
    return total.toFixed(2)
  }
}

export default getters
