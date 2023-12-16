<template>
    <main id="main">
        <div class="container">
            <div class="social-links  d-flex flex-row-reverse align-items-center" v-html="state.sosmedShare">
            </div>            
        </div>
        <div class="container" v-html="state.generateHTML"  style="padding: 20px 15px 20px 15px;"></div>
    </main>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute } from 'vue-router';
export default {
    name: "Detailinfo",
    setup() {
        const alamat        = window.location.href
        const alamatURL     = new URL(alamat)
        const origin        = alamatURL.origin
        const route         = useRoute()
        const state = reactive({
            status: true,
            objBerita: null,
            generateHTML: computed(() => {
                const parameter = route.params.id ;
                try{
                    if(state.objBerita === null){
                        console.log("Tunggu berita masuk ....")
                    }else{
                        const judul     = `<h2>${state.objBerita[parameter].title} </h2>`;
                        const isiKonten = `<div style="text-align:justify">${state.objBerita[parameter].content}</div>` ;
                        const htmlData  = `<div>${judul} ${isiKonten}</div>` ;
                        return htmlData ;
                    }

                }catch (error){console.log("laporan kesalahan : "+ error)}
            }),
            sosmedShare: computed(() => {
                const parameter = route.params.id ;
                const baseURL   = origin
                const fullURL   = `${baseURL}/detailinfo/${parameter}`
                const whatsapp  = `<div><a href="https://api.whatsapp.com/send?text=${fullURL}" data-action="share/whatsapp/share" class="whatsapp"><i class="bi bi-whatsapp"></i></a></div>`
                const facebook  = '<div class="fb-share-button" data-href="${fullURL}" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopmd-sumsel.web.app%2Fdetailinfo%2Ftag%3Ablogger.com%2C1999%3Ablog-5255358249157674175.post-1911537108658712600&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="bi bi-facebook"></i></a></div>' 
                const instagram = `<div><a href="#" class="instagram"><i class="bi bi-instagram"></i></a></div>`
                const twitter   = `<div><a href="#" class="twitter"><i class="bi bi-twitter"></i></a></div>`
                return `${twitter} &nbsp;&nbsp; ${facebook} &nbsp;&nbsp; ${instagram} &nbsp;&nbsp; ${whatsapp}` ;
            })         
        })
        return {state};
    },
    mounted(){ this.ambilData()},
    methods: {
        ambilData() {
            const penyimpanan       = window.localStorage
            const entries           = penyimpanan.getItem("dataBlog")
            const posts             = JSON.parse(entries)
            this.state.objBerita    = posts
        }
    }
}
</script>
<style scoped>
p {
    text-align: justify;
}
.card-text p {
    text-align: justify;
}
</style>