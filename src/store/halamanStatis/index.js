import { defineStore } from "pinia";
import { getDatabase, ref, onValue } from "firebase/database";

export const halamanStatis = defineStore ({
    id: "staticPage",
    state: () => ({
        objHalStatic: null
    }),
    getters: {
        getHalaman: (state)=> {
            if(state.objHalStatic !== null){
                return state.objHalStatic
            }else{
                return ""
            }
        }
    },
    actions: {
        setHalaman: function(objHalaman){
            this.objHalStatic = objHalaman
        },
        ambilHalaman: function(){
            const set_halaman   = this.setHalaman
            const db            = getDatabase();
            const tblref        = ref(db, '/aplikasi/halamanStatis');
            return new Promise(function(resolve, reject){
                try{
                    onValue(tblref, (snapshot) => {
                        const dataHalaman = {
                            objHal : snapshot.val()
                        }
                        const penyimpanan   = window.localStorage;
                        penyimpanan.setItem("dataHalaman", JSON.stringify(dataHalaman.objHal));
                        set_halaman(dataHalaman.objHal)
                        resolve(dataHalaman.objHal)
                    }, { onlyOnce : true})
                }catch (error){reject(error)}
            })
        }
    }
})