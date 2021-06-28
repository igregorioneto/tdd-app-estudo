import flushPromises from 'flush-promises'
// testa requisições de forma isolada
import nock from 'nock'
import api from '@/api'
import userFixture from './fixtures/user'

describe('api', () => {
    it('searches for the user', async () => {
        const expectedUser = 'joao'

        const request = nock('https://api.github.com')
        .get(`/users/${expectedUser}`)
        .reply(200, userFixture)

        const result = await api.searchUser(expectedUser)
        await flushPromises()

        expect(result).toEqual(userFixture)
        expect(request.isDone()).toBe(true)
    })
})