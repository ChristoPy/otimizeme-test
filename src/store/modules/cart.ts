import type { CartItem } from "@/types/cart"
import type { Product } from "@/types/product"
import type { ActionTree, GetterTree } from "vuex"

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
  },
  setQuantity(
    { commit, state },
    { product, quantity }: { product: Product; quantity: number }
  ) {
    if (product.quantity < quantity) {
      return
    }
    if (quantity === 0) {
      commit('REMOVE_ITEM', {
        product,
        quantity: 0,
      })
      return
    }

    commit('SET_QUANTITY', {
      item: {
        product,
        quantity,
      },
      quantity,
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
  SET_QUANTITY(
    state: RootState,
    { item, quantity }: { item: CartItem; quantity: number }
  ) {
    const index = state.all.findIndex((i) => i.product._id === item.product._id)

    if (index > -1) {
      state.all[index].quantity = quantity
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
