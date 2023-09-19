import type { Product } from "@/types/product"
import type { ActionTree, GetterTree } from "vuex"

export interface CartItem {
  product: Product
  quantity: number
}

interface State {
  all: CartItem[]
}

export const state = () =>
({
  all: [],
} as State)

export type RootState = ReturnType<typeof state>

const getters: GetterTree<RootState, RootState> = {
  itemsTotal: (state) => state.all.reduce(
    (total, _) => total += 1,
    0
  ),
  totalPrice: (state) =>
    state.all.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),
  isProductInCart: (state) => (product: Product) => state.all.some((item) => item.product._id === product._id)
}

const actions: ActionTree<RootState, RootState> = {
  addProduct({ state, commit }, product: Product) {
    if (state.all.find((i) => i.product._id === product._id)) {
      return
    }

    commit('ADD_PRODUCT', {
      product,
      quantity: 1,
    })
  }
}

const mutations = {
  ADD_PRODUCT(state: RootState, item: CartItem) {
    state.all.push(item)
  },
  REMOVE_ITEM(state: RootState, item: CartItem) {
    const index = state.all.findIndex((i) => i.product._id === item.product._id)

    if (index > -1) {
      state.all.splice(index, 1)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
