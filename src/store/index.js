import { createStore, createLogger } from 'vuex'

const store = createStore({
    state() {
        return {
            count: 5,
            posts: null,
            favoritedPosts: [],
            arePostsLoading: false
        }
    },
    mutations: {
        INCREMENT_COUNT (state) {
            state.count++
        },
        SET_COUNT (state, value) {
            state.count = value
        },
        LIKE_POST (state) {
            state.count++
        },
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_ARE_POSTS_LOADING(state, bool) {
            state.arePostsLoading = bool
        }
    },
    actions: {

        favoritePost({ commit }, payload) {

            
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('SET_COUNT', 177)
                    commit('INCREMENT_COUNT')
                    resolve()
                }, 2000)
            })
            
            console.log(payload)
        }
    },
    plugins: import.meta.env.MODE !== 'production' ? [createLogger()] : []
})

export default store