<template>
  <main id="main">
    <div class="container">
      <section id="misi" v-bind:innerHTML="state.pageVisi">
        <!-- ======= Visi Section ======= -->
        <!-- <h2 CENTER style="text-align: center;"><strong>VISI SATUAN PENDIDIKAN</strong></h2>
        <h3>Visi SMK Azzahro’ Palembang</h3>
        <p style="text-align: justify;">Menjadi lembaga pendidikan kejuruan yang dikelola secara profesional, menghasilkan lulusan yang berIMTAQ berdasarkan basis pesantren, kompeten dibidangnya, berkarakter, berjiwa wirausaha, berwawasan lingkungan serta melanjutkan pendidikan ketingkat lebih lanjut sesuai dengan bidang kejuruan.</p>
        <h2 CENTER style="text-align: center;"><strong>MISI SATUAN PENDIDIKAN</strong></h2>
        <h3>Misi SMK Azzahro’ Palembang</h3>
        <p style="text-align: justify;">
          <ul>
            <li>Membangun iklim belajar berdasarkan IMTAQ</li>
            <li>Meningkatkan kerjasama dengan DU/DI dalam pembelajaran kejuruan</li>
            <li>Membekali siswa dengan pengetahuan dan keterampilan guna menghasilkan yang menghasilkan tamatan yang kompeten</li>
            <li>Mencetak insan yang berjiwa wirausaha dan dapat menciptakan lapangan pekerjaan sendiri</li>
            <li>Membentuk insan berperilaku jujur, ramah dan sopan</li>
            <li>Menanamkan sikap disiplin, kerja keras dan bertanggung jawab</li>
            <li>Menanamkan jiwa enterpreneur yang berdaya guna dan berdaya saing ditingkat nasional</li>
            <li>Menanamkan budaya sekolah bersih dan sehat melalui pengolahan lingkungan yang baik dan terus menerus guna menjaga kelestarian lingkungan</li>
          </ul>
        </p> -->
        <!-- End Visi Section -->        
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