import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import cart from './modules/cart'
import checkout from './modules/checkout'
import products from './modules/products'

Vue.use(Vuex)

const debug = import.meta.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    checkout,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

