<template>
  <main id="main">
        <!-- Carousel Start -->
        <div  v-bind:innerHTML="state.htmlCarousel" id="profilCarousel" class="container" v-if="state.ispc" style="width: 50%;">
          <!-- <Carousel v-bind:dataCarousel="state.getIsiCarousel"></Carousel> -->
        </div>
        <div id="profilCarousel" class="container" v-if="state.isSmartPhone" style="width: 100%;" v-bind:innerHTML="state.htmlCarousel">
          <!-- <Carousel v-bind:dataCarousel="state.getIsiCarousel"></Carousel> -->
        </div>        
        <div style="width: 50%; margin: auto;"><p>Sumber foto: <a href="https://hodijahrisa.wordpress.com/">https://hodijahrisa.wordpress.com/</a></p></div>
        <!-- Carousel End --> 
        <div class="container">
          <div CENTER style="text-align: center;"><h3><strong>SMK Azzahro Palembang</strong></h3></div>
          <h4>SMK Azzahro Palembang adalah sebuah institusi pendidikan SMK swasta yang berlokasi di Jl. Kh Azhari 12 Ulu, Kota Palembang.</h4>
          <p style="text-align: justify;">
            SMK swasta ini mengawali perjalanannya pada tahun 1900. Saat sekarang SMK Azzahro Palembang memakai panduan kurikulum belajar pemerintah yaitu SMK 2013 REV.  Tata Boga. SMK Azzahro Palembang ditangani oleh seorang operator yang bernama Vivin Sumarni. <br>
            <cite title="Source Title">Sumber informasi: <a href="https://sekolahloka.com/data/smk-azzahro-palembang/">sekolahloka.com</a></cite>
          </p>
        </div>
  </main> 
</template>
<script>
import {computed,reactive} from "vue";
import { BootstrapCarousel } from "../components/class/classBootstrap.js"
export default {
    name: "About",
    setup(){
        const alamat        = window.location.href
        const alamatURL     = new URL(alamat)
        const origin        = alamatURL.origin
        const lebarLayar    = window.screen.width
        const state = reactive({
            isiCarousel : [
                {id:1, active:true, image: "https://hodijahrisa.files.wordpress.com/2011/11/foto0031.jpg", judul: "Kegiatan Siswi SMK", subJudul: "Diskusi kelompok pada mata pelajaran membuat pola", isiText:""},
                {id:2, active:false, image: "https://hodijahrisa.files.wordpress.com/2011/11/kls-xi-2.jpg", judul: "Kegiatan Siswi SMK", subJudul: "Siswa kelas XI busana sedang membuat pola kebaya", isiText:""},
                {id:3, active:false, image: origin + "/img/about/01.jpg", judul: "Kegiatan Melaksanakan ANBK", subJudul: "", isiText:""},
                {id:4, active:false, image: origin + "/img/about/02.jpg", judul: "Kegiatan Melaksanakan ANBK", subJudul: "", isiText:""}
            ],
            getIsiCarousel : computed(() => state.isiCarousel),
            isSmartPhone : computed(() => lebarLayar < 500? true: false),
            ispc : computed(() => lebarLayar > 1200? true: false),
            urlUtama: origin,
            htmlCarousel: ""
        })
        
        return {state};
    },
    mounted(){ this.setCarousel()},
    methods: {
      setCarousel() {
        const carousel = new BootstrapCarousel()
        carousel.addItem('https://hodijahrisa.files.wordpress.com/2011/11/foto0031.jpg', 'Kegiatan Siswi SMK', 'Diskusi kelompok pada mata pelajaran membuat pola')
                .addItem('https://hodijahrisa.files.wordpress.com/2011/11/kls-xi-2.jpg', 'Kegiatan Siswi SMK', 'Siswa kelas XI busana sedang membuat pola kebaya')
                .addItem(this.state.urlUtama + '/img/about/01.jpg', 'Kegiatan Melaksanakan ANBK', '')
                .addItem(this.state.urlUtama + '/img/about/02.jpg', 'Kegiatan Melaksanakan ANBK', '')
        const generatedHtml = carousel.generateHtml();
        this.state.htmlCarousel = generatedHtml
      }
    }
}
</script>

<style scoped>
  #profilCarousel{
    margin-top: 20px;
  }
</style>