import { shallowMount } from '@vue/test-utils'
import VUserProfile  from '@/components/VUserProfile'
import user from './fixtures/user'

describe('VUserProfile', () => {
    let props

    const build = () => {
        const wrapper = shallowMount(VUserProfile, {
            propsData: props,
        })
        return {
            wrapper,
            avatar: () => wrapper.find('.user-profile__avatar'),
            name: () => wrapper.find('.user-profile__name'),
            bio: () => wrapper.find('.user-profile__bio')
        }
    }

    // Preparando a estrutura antes de iniciar os testes (it)
    beforeEach(() => {
        props = {
            user
        }
    })


    //Iniciando nos testes
    it('renders the component', () => {
        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders main component', () => {
        const { avatar, name, bio } = build()

        expect(avatar().exists()).toBe(true)
        expect(avatar().attributes().src).toBe(props.user.avatar_url)

        expect(name().exists()).toBe(true)
        expect(name().text()).toBe(props.user.name)

        expect(bio().exists()).toBe(true)
        expect(bio().text()).toBe(props.user.bio)
    })
})
