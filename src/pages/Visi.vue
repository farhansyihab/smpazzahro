<template>
  <main id="main">
    <div class="container">
      <section id="misi" v-bind:innerHTML="state.pageVisi">      
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
      pageVisi: "",
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
          this.state.pageTujuan = objEntries.tujuan;
        }catch(err) {console.log(err)}
      }else{
        halamanStatis().ambilHalaman().then((response) => {
          const objHal          = response
          this.state.pageVisi   = objHal.visi
          this.state.pageTujuan = objHal.tujuan
        })
      }
    }
  },
  mounted() { this.ambilData()}
}
</script>