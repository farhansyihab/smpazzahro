import { defineStore } from "pinia";
import { getDatabase, ref, onValue } from "firebase/database";
import { blogDataService } from "../../../firebase/DataService.js"

export const beritaData = defineStore({
    id: "berita",
    state: () => ({
        posts: []
    }),

    getters: {
        getPostById: (state) => (id) => {
            return state.posts[id]
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
            const ambilDt = this.fetchData
            const dataBlog = new blogDataService();
            return new Promise(function(resolve, reject){
                try {
                    dataBlog.addData(isi, judul).then((response) =>{
                        if(response)  {
                          this.ambilDt
                        }
                      })
                      resolve(true)                    
                } catch (error) {
                    reject(error)
                }                
            })
        }
    }
})