import { defineStore } from "pinia";

export const beritaData = defineStore({
    id: "berita",
    state: () => ({
        posts: []
    }),

    getters: {
        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
        }
    },

    actions: {
        fetchPosts() {
            const penyimpanan   = window.localStorage
            const entries       = penyimpanan.getItem("dataInfo")
            const posts         = JSON.parse(entries)
            this.posts          = posts
        }
    }
})