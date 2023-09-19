import type { Product } from "@/types/product"

const state = () => ({
  all: [
    {
      _id: '1',
      name: 'Meu Produto',
      price: 1000,
      quantity: 10,
      description: 'descrição do meu produto',
      image: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
    },
    {
      _id: '2',
      name: 'Meu Produto',
      price: 1000,
      quantity: 10,
      description: 'descrição do meu produto',
      image: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
    },
    {
      _id: '3',
      name: 'Meu Produto',
      price: 1000,
      quantity: 10,
      description: 'descrição do meu produto',
      image: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80'
    }
  ] as Product[]
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
