import mutations from '@/store/mutations'
import initialState from '@/store/state'
import user from './fixtures/user'

describe('mutatins', () => {
    let state
    
    beforeEach(() => {
        state = { ...initialState }
    })

    it('sets new usur', () => {
        const expectedUser = user

        mutations.SET_USER(state, expectedUser)

        expect(state.user).toEqual(expectedUser)
        expect(state.user).not.toBe(expectedUser)
    })
})