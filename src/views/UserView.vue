<template>
    <div>
        <VUserSearchForm @submitted="searchUser" />
        <VUserProfile :user="user"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

export default {
    name: 'UserView',
    components: {
        VUserSearchForm,
        VUserProfile
    },
    // data() {
    //     return {
    //         user: { name: '' }
    //     }
    // },
    methods: {
        searchUser(username) {
            this.$store.dispatch('SEARCH_USER', { username })
        }
    },
    computed: {
        ...mapState({
            user: 'users',
        })
    }
}
</script>
