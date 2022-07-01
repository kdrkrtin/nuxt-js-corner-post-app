import axios from "axios";

const reqAxios = axios.create({
    baseURL: 'https://kose-yazisi-vuejs-default-rtdb.firebaseio.com'
})

const state = () => ({
    posts: []
})

const getters = {
    getPosts(state) {
        return state.posts;
    },
    getPost(state, key) {
        return state.posts[key]
    }
}
const mutations = {
    setState(state, posts) {
        state.posts = posts
    },
    addStatePost(state, post) {
        state.posts.push(post);
    },
    updateStatePost(state, post) {
        const postIndex = state.posts.findIndex(item => {
            return item.id === post.id;
        });
        if (postIndex) {
            state.posts[postIndex] = post;
        }
    }
}
const actions = {
    nuxtServerInit({ commit }) {
        // if (process.server) {
        //     console.log('server tarafinda calisiyoruz.')
        // }
        return reqAxios.get('/posts.json')
            .then(res => {
                const { data } = res;
                const postArray = [];
                for (const key in data) {
                    postArray.push({ id: key, ...data[key] });
                }
                commit('setState', postArray);
            })
    },
    setPosts({ commit }, posts) {
        commit('setState', posts)
    },
    addPost({ commit }, post) {
        return reqAxios.post('/posts.json', post)
            .then((res) => {
                commit('addStatePost', { ...post, id: res.data.name });
            })
    },
    updatePost({ commit }, post) {
        return reqAxios.put(`/posts/${post.id}.json`, post)
            .then(res => {
                commit('updateStatePost', res.data);
            })
    }
}

export {
    state,
    getters,
    mutations,
    actions
}