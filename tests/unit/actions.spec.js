jest.mock('@/api')
import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import userFixture from './fixtures/user'

describe('store actions', () => {
    let commit

    beforeEach(() => {
        commit = jest.fn()
    })

    it('searches for user', async () => {
        const expectedUser = 'joao'

        await actions.SEARCH_USER({commit}, { username: expectedUser })
        // Garantia que todas as promises já tenham sido resolvidas
        await flushPromises()

        // garante que uma função mock - simulação - foi chamada com os argumentos específicos
        expect(api.searchUser).toHaveBeenCalledWith(expectedUser)
        expect(commit).toHaveBeenCalledWith('SET_USER', userFixture)
    })
})
