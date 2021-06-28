import userFixture from '../../../tests/unit/fixtures/user'

// Retornando um objeto da função com um valor 'Padrão'
export default {
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture)
}