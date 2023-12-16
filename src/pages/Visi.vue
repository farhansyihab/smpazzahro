<template>
  <main id="main">
    <div class="container">
      <div class="text-center">
        <H2>VISI, MISI DAN TUJUAN SEKOLAH</H2>
      </div>
      <section id="visi" v-bind:innerHTML="state.pageVisi">      
      </section> 
      <section id="misi" v-bind:innerHTML="state.pageMisi">      
      </section>       
      <section id="tujuan" v-bind:innerHTML="state.pageTujuan">
      </section> 
    </div>
  </main> 
</template>
<script>
import { reactive } from 'vue'
import { halamanStatis } from "../store/halamanStatis/index.js"
export default { 
  name: 'Visi',
  setup(){
    const state = reactive({
      pageVisi: "<h3>VISI</h3><strong>UNGGUL DALAM INTELEKTUAL MUSLIMAH BERAKHLAK DAN BERPRESTASI</strong>",
      pageMisi: "",
      pageTujuan: ""
    })
    return { state }
  },
  methods: {
    ambilData(){
      const penyimpanan   = window.localStorage;
      const entries       = penyimpanan.getItem("dataHalaman");
      if(entries != null){
        try{
          const objEntries      = JSON.parse(entries)
          this.state.pageVisi   = objEntries.visi;
          this.state.pageMisi   = objEntries.misi;
          this.state.pageTujuan = objEntries.tujuan;
        }catch(err) {console.log(err)}
      }else{
        halamanStatis().ambilHalaman().then((response) => {
          const objHal          = response
          this.state.pageVisi   = objHal.visi;
          this.state.pageMisi   = objHal.misi;
          this.state.pageTujuan = objHal.tujuan;
        })
      }
    }
  },
  mounted() { this.ambilData()}
}
</script>
<style scoped>
section {
  padding-top: 10px;
}
</style>