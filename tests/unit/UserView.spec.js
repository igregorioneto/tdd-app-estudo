jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from "@vue/test-utils"

import Vuex from 'vuex'

import UserView from "@/views/UserView"
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

import initialState from '@/store/state'
import actions from '@/store/actions'

import userFixture from './fixtures/user'

// describe('UserView', () => {
//     it('works', () => {})
// })

// intância local do vue
const localVue = createLocalVue()
localVue.use(Vuex)

describe("UserView", () => {
  let state

  const build = ()=> {
    // renderiza o componente sem nenhuma dependência
    const wrapper = shallowMount(UserView, {
        // data: () => ({
        //     user: {}
        // })

        // Passando para o componente UserView a instência criada
        // É o que é feito no main.js
        localVue,
        store: new Vuex.Store({ 
          state,
          actions,
        })
    })

    return  {
        wrapper,
        userSearchForm: ()=> wrapper.find(VUserSearchForm),
        userProfile: ()=> wrapper.find(VUserProfile)
    }
  }

  // Resetando os valores para valores padrões a cada teste.
  // Valores iniciais
  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  // Primeiro teste -> verificar se o componente Pai esta renderizando
  it("renders the component", () => {
    // Outro -> mount()
    //Representação do componente
    const { wrapper } = build()

    // Isso garante que um valor corresponda ao mais recente
    expect(wrapper.html()).toMatchSnapshot()
  })

  // Segundo teste -> verificar se existem os componentes filhos dentro do componente Pai
  it('renders main child components', () => {

    // verificando os componentes filhos se existem
  //   const wrapper = shallowMount(UserView)
  //   const userSearchForm = wrapper.find(VUserSearchForm)
  //   const userProfile = wrapper.find(VUserProfile)

  const { userSearchForm, userProfile } = build()

    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })

  // Terceiro teste -> verificar se a props esta sendo enviada para o componente filho

  it('passes a binded user prop to user profile component', () => {
    // arrange
    const { wrapper, userProfile } = build()
    wrapper.setData({
      user: {
        name: 'João'
      }
    })

    // Passando o usuário presente e não só o Data (que foi comentado)
    expect(userProfile().vm.user).toBe(wrapper.vm.user)
  })

  it('searches for a user when received "submitted"', () => {
    const expectedUser = 'joao'
    const { userSearchForm } = build()

    // Emitindo um evento manualmente
    userSearchForm().vm.$emit('submitted', expectedUser)

    // estamos garantindo que uma função simulada seja chamada
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })
 

})
