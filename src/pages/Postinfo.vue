<template>
    <main id="main">
       <div class="container" v-html="state.generateHTML"></div>
    </main>
</template>

<script>
import { computed, reactive } from "vue";
import { beritaData } from "../store/blog/index.js"
import { CardGen } from "../components/class/classBootstrap.js"
export default {
    name: "Postinfo",
    setup() {
        const state = reactive({
            status: true,
            posts: null,
            generateHTML: computed(() => { 
                const bentukHTML = () =>{
                    const objData   = state.posts
                    const dataCard  = objData.map( (data, index) => {
                            const isi = {};
                            let txtString       = data.content.replace(/<[^>]*>?/gm, '')
                            let potong          = txtString.split(/\s+/).slice(0,50).join(" ")
                            let htmlid          = `<br><a href='/detailinfo/${index}' class="btn btn-primary">Baca selengkapnya</a>`
                            isi.title           = data.title;
                            isi.description     = potong + "&nbsp; ..... &nbsp;" + htmlid
                            return isi
                    })                
                    const objHTML       = new CardGen(dataCard)
                    const htmlData      = objHTML.generateCards()
                    const lebarLayar    = window.screen.availWidth;
                    if(lebarLayar < 500){
                        return `<div class='isiInfo'>${htmlData}</div>`;
                    }else{
                        return `<div class='isiInfo' style='padding-top: 10px; display: grid; grid-template-columns: auto auto ; gap: 10px; grid-auto-rows: minmax(100px, auto);'>${htmlData}</div>`;
                    }                    
                }

                if(state.posts === null){
                    beritaData().fetchData().then((response) => {
                        state.posts = response
                        return bentukHTML()                    
                    })
                }else{
                    return bentukHTML()
                }
            })
        })
        return {state};
    },
    methods: {
        ambilData() {
            const online        = navigator.onLine;
            const penyimpanan   = window.localStorage;
            const entries       = penyimpanan.getItem("dataBlog");
            if(online == true){
                beritaData().fetchData().then((response) => {
                const objPost           = response
                this.state.posts        = objPost
                })                
            }else{
                try{
                const objEntries      = JSON.parse(entries)
                this.state.posts      = objEntries
                }catch(err) {console.log(err)}
            }
        }
    },
    beforeMount() {
        this.ambilData()
    }    
}
</script>
<style scoped>
p {
    text-align: justify;
}
.card-body{
    text-align: justify;
}
p {
    text-align: justify !important;
}
</style>
