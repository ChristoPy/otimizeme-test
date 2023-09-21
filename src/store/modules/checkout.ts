import type { ActionTree, GetterTree } from "vuex"

type PaymentMethod = 'credit-card' | 'br-pix' | 'br-boleto'

interface Card {
  number: string
  holder: string
  taxId: string
  expiry: string
  cvv: string
  installments: number
}

interface State {
  total: number,
  taxId: string,
  fillAddress: boolean,
  addToCart: boolean,
  initiateCheckout: boolean,
  addPaymentInfo: boolean,
  shipping: {
    name: string
    email: string
    phone: string
    zipCode: string
    address: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
  }
  payment: {
    method: PaymentMethod
    card?: Card
  }
}

export const state = () =>
({
  total: 0,
  taxId: '',
  fillAddress: false,
  addToCart: false,
  initiateCheckout: false,
  shipping: {
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: 'AC',
  },
  payment: {
    method: 'credit-card',
    card: {
      number: '',
      holder: '',
      taxId: '',
      expiry: '',
      cvv: '',
      installments: 1,
    }
  }
} as State)

export type RootState = ReturnType<typeof state>

const getters: GetterTree<RootState, RootState> = {
  paymentMethod: (state) => state.payment.method,
  totalPrice: (state) => state.total
}

const actions: ActionTree<RootState, RootState> = {
  setPaymentMethod({ state, commit }, type: PaymentMethod) {
    commit('SET_PAYMENT_METHOD', type)
  },
  setShippingDetails({ state, commit }, shipping: State['shipping']) {
    commit('SET_SHIPPING_DETAILS', shipping)
  },
  setPaymentDetails({ state, commit }, shipping: Card) {
    commit('SET_PAYMENT_DETAILS', shipping)
  },
  setTotalPrice({ state, commit }, total: number) {
    commit('SET_TOTAL_PRICE', total)
  },
  setTaxId({ state, commit }, total: number) {
    commit('SET_TAX_ID', total)
  },
  fillAddress({ state, commit }) {
    if (!state.fillAddress) {
      console.log('FillAddress', state)
      commit('SET_FLAG', 'fillAddress')
    }
  },
  addToCart({ state, commit }) {
    if (!state.addToCart) {
      console.log('FillAddress', state)
      commit('SET_FLAG', 'addToCart')
    }
  },
  initiateCheckout({ state, commit }) {
    if (!state.initiateCheckout) {
      console.log('InitiateCheckout', state)
      commit('SET_FLAG', 'initiateCheckout')
    }
  },
  addPaymentInfo({ state, commit }) {
    if (!state.addPaymentInfo) {
      console.log('AddPaymentInfo', state)
      commit('SET_FLAG', 'addPaymentInft')
    }
  },
  purchase({ state }) {
    console.log('Purchase', state)
  },
  purchaseFail({ state }) {
    console.log('PurchaseFail', state)
  },
  changeWindow({ state }) {
    console.log('ChangeWindow', state)
  },
  closeWindow({ state }) {
    console.log('CloseWindow', state)
  },
}

const mutations = {
  SET_PAYMENT_METHOD(state: RootState, type: PaymentMethod) {
    state.payment.method = type
  },
  SET_SHIPPING_DETAILS(state: RootState, shipping: State['shipping']) {
    state.shipping = { ...state.shipping, ...shipping };
  },
  SET_PAYMENT_DETAILS(state: RootState, card: Card) {
    state.payment.card = { ...state.payment.card, ...card };
  },
  SET_TOTAL_PRICE(state: RootState, total: number) {
    state.total = total;
  },
  SET_TAX_ID(state: RootState, taxId: string) {
    state.taxId = taxId;
  },
  SET_FLAG(state: RootState, flag: 'fillAddress' | 'initiateCheckout' | 'addToCart' | 'addPaymentInfo') {
    state[flag] = true;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
