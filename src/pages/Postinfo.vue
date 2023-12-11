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
            generateHTML: computed(() => {
                const beritanya = beritaData();
                const objData   = beritanya.posts
                const dataCard  = objData.map( (data) => {
                    const isi = {};
                    let potong          = data.content.split("<a name='more'></a>")
                    let htmlid          = `<br><a href='/detailinfo/${data.id}' class="btn btn-primary">Baca selengkapnya</a>`
                    isi.title           = data.title;
                    isi.description     = potong[0] + htmlid
                    return isi
                })
                const objHTML       = new CardGen(dataCard)
                const htmlData      = objHTML.generateCards()
                // let htmlData    = '';
                // for(let index = 0; index < objData.length; index++){
                //     let id      = objData[index].id
                //     let htmlid  = `<div class="card-footer"><a href='/detailinfo/${id}' class="btn btn-primary">Baca selengkapnya</a></div>`
                //     let judul   = `<div class="card-header"><h2 class="card-title">${objData[index].title} </h2></div>`;
                //     let potong  = objData[index].content.split("<a name='more'></a>")
                //     let isi     = `<div class="card-body">${potong[0]}</div>`
                //     htmlData    = htmlData + `<div class="card">${judul} ${isi}${htmlid}</div></div>` ;
                // }
                const lebarLayar    = window.screen.availWidth;
                if(lebarLayar < 500){
                    return `<div class='isiInfo'>${htmlData}</div>`;
                }else{
                    return `<div class='isiInfo' style='padding-top: 10px; display: grid; grid-template-columns: auto auto ; gap: 10px; grid-auto-rows: minmax(100px, auto);'>${htmlData}</div>`;
                }
            })
        })
        return {state};
    },
    methods: {
        ambilData() {
            const beritanya = beritaData();
            beritanya.fetchPosts()
        }
    },
    mounted() {
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
</style>
