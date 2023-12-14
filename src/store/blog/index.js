import { defineStore } from "pinia";
import { getDatabase, ref, onValue } from "firebase/database";

export const beritaData = defineStore({
    id: "berita",
    state: () => ({
        posts: []
    }),

    getters: {
        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
        },
        getAllPost: (state) => {
            return state.posts
        }
    },

    actions: {
        setBlog: function(objBlog){
            this.posts = objBlog
        },        
        ambilDataLokal: function() {
            const penyimpanan   = window.localStorage
            const entries       = penyimpanan.getItem("dataBlog")
            const posts         = JSON.parse(entries)
            this.posts          = posts
        },
        fetchData: function(){
            const settingBlog   = this.setBlog
            const db            = getDatabase();
            const tblref        = ref(db, '/aplikasi/blog');
            return new Promise(function(resolve, reject){
                try{
                    onValue(tblref, (snapshot) => {
                        const dataBlog = {
                            objBlog : snapshot.val()
                        }
                        const penyimpanan   = window.localStorage;
                        penyimpanan.setItem("dataBlog", JSON.stringify(dataBlog.objBlog));
                        settingBlog(dataBlog.objBlog)
                        resolve(dataBlog.objBlog)
                    }, { onlyOnce : true})
                }catch (error){reject(error)}
            })
        },
        inputBlog: function(judul, isi){
            const db            = getDatabase();
            const tblref        = ref(db, '/aplikasi/blog/');
            const dataUpdate    = {
                title: judul,
                content: isi                
            }
            return new Promise(function(resolve, reject){
                try{
                    tblref.push(dataUpdate)
                    resolve(true)
                }catch (error){reject(error)}
            })           
        }
    }
})