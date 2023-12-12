<template>
  <main id="main" style="margin-top: 10px; padding-top: 10px;">
        <h3 center style="text-align: center;">Profile SMP AZZAHRO</h3>
        <div  v-bind:innerHTML="state.pageAbout"  class="container"></div>
  </main> 
</template>
<script>
import {computed,reactive} from "vue";
import { halamanStatis } from "../store/halamanStatis/index.js"
export default {
    name: "About",
    setup(){
        const alamat        = window.location.href
        const alamatURL     = new URL(alamat)
        const origin        = alamatURL.origin
        const lebarLayar    = window.screen.width
        const state = reactive({
          pageAbout : ""
        })
        
        return {state};
    },
    mounted() { this.ambilData()},
    methods: {
      ambilData(){
      const penyimpanan   = window.localStorage;
      const entries       = penyimpanan.getItem("dataHalaman");
      if(entries != null){
        try{
          const objEntries      = JSON.parse(entries)
          this.state.pageAbout  = objEntries.about;
        }catch(err) {console.log(err)}
      }else{
        halamanStatis().ambilHalaman().then((response) => {
          const objHal          = response
          this.state.pageAbout  = objHal.about
        })
      }
    }
    }
}
</script>

<style scoped>

</style>