<template>
    <div class="container-fluid bg-dark py-2 d-md-flex">
        <div class="container">
            <div class="d-flex justify-content-between topbar">
                <div class="top-info">
                    <small class="me-3 text-white-50"><a href="mailto:smkazzahropalembang@gmail.com"><i class="bi bi-envelope-at me-2 text-secondary" style="font-size: 25px;"></i></a></small>
                </div>
                <div id="note" class="text-secondary d-none d-xl-flex"><small>Trust us to bring Your vision to live</small></div>
                <div class="top-link">
                    <a href="https://wa.me/62895388726164" class="nav-fill btn btn-sm-square rounded-circle"><i class="bi bi-whatsapp text-light" style="font-size: 25px;"></i></a>
                    <a href="https://www.instagram.com/smkazzahro_/" class="nav-fill btn btn-sm-square rounded-circle"><i class="bi bi-instagram text-light" style="font-size: 25px;"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <div id="navigasi" class="container-fluid">
        <div class="container">
            <nav class="navbar navbar-dark navbar-expand-lg py-0">
                <div @click="kedepan"> <!-- tidak pakai router link karena pengaruh ke active nav-->
                    <h1 id="txtsmk" class="fw-bold d-block text-success-emphasis">SMP <span id="txtazzahro">AZZAHRO</span> </h1>
                </div>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarSMK">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-transparent" id="navbarSMK">
                    <div class="navbar-nav ms-auto mx-xl-auto p-0">
                        <router-link @click="tutupNavBar()" :to="{ name: 'depan'}" class="nav-item nav-link" class-active="active">Home</router-link>
                        <router-link @click="tutupNavBar()" :to="{ name: 'about'}" class="nav-item nav-link" class-active="active">Profil</router-link>
                        <router-link @click="tutupNavBar()" :to="{ name: 'info'}" class="nav-item nav-link" class-active="active">Info</router-link>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Visi & Misi</a>
                            <div class="dropdown-menu rounded">
                                <router-link @click="tutupNavBar()" :to="{ path: '/visi', hash: '#visi'}" class="dropdown-item">Visi & Misi</router-link>
                                <router-link @click="tutupNavBar()" :to="{ path: '/visi', hash: '#tujuan'}" class="dropdown-item">Tujuan</router-link>
                            </div>
                        </div>
                        <router-link @click="tutupNavBar()" :to="{ path: '/login'}" class="nav-item nav-link" class-active="active" v-if="!state.cekUlangLogin">Login</router-link>
                        <div class="nav-item dropdown"  v-if="state.cekUlangLogin">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Menu User</a>
                            <div class="dropdown-menu rounded">
                                <router-link @click="tutupNavBar()" :to="{ name: 'tambahuser'}" class="dropdown-item">Tambah User</router-link>
                                <router-link @click="tutupNavBar()" :to="{ name: 'inputblog'}" class="dropdown-item">Input Berita</router-link>
                                <router-link @click="LogOut()" :to="{ name: 'depan'}" class="dropdown-item">LogOut</router-link>
                            </div>
                        </div>
                        <router-link @click="tutupNavBar()" :to="{ name: 'kontak'}" class="nav-item nav-link" class-active="active">Hubungi Kami</router-link>
                    </div>
                </div>
                <div class="d-none d-xl-flex flex-shirink-0">
                    <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
                        <a href="https://wa.me/62895388726164" class="position-relative animated tada infinite">
                            <i class="bi bi-telephone bi-2x" style="font-size: 35px; color:green !important;"></i>
                            <div class="position-absolute" style="top: -7px; left: 20px;">
                                <span><i class="fa fa-comment-dots text-secondary"></i></span>
                            </div>
                        </a>
                    </div>
                    <div class="d-flex flex-column pe-4 border-end">
                        <span class="text-white-50">Informasi</span>
                        <span style="color: white;">WA: +62 895-3887-26164</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-center ms-4 ">
                        <a v-bind:href="state.urlDepan" ><i class="bi bi-search text-white" style="font-size: 35px;"></i> </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
</template>

<script>
import {reactive, computed} from "vue";
import { getAuth, signOut  } from "firebase/auth"
import router from '../router/index.js';
import { userData } from "../store/user/index.js"
const auth = getAuth()
export default {
name: 'Atas',
    setup() {
        const alamat        = window.location.href
        const alamatURL     = new URL(alamat)
        const origin        = alamatURL.origin  
        const dataUser      =  userData()
        const state = reactive({
            urlDepan: origin,
            statusNavBar : false, 
            statusLogin: false,
            cekUlangLogin : computed(() => dataUser.getStatusLogin),
        })
        const tutupNavBar = function() {
            this.state.statusNavBar = false
            const navBar = document.getElementById('navbarSMK');
            navBar.classList.toggle('hide');
            navBar.classList.remove('show');
        } 
        const bukaNavBar = function() {
            this.state.statusNavBar = true
            const navBar = document.getElementById('navbarSMK');
            navBar.classList.toggle('show');
            navBar.classList.remove('hide');        
        }
        const LogOut = function(){
            signOut(auth)
            this.tutupNavBar();
        }
        return {state, tutupNavBar, bukaNavBar, LogOut}
    },
    mounted(){ this.cekLogin() },
    methods: {
        cekLogin(){
            userData().cekLogin().then(response => {
                userData().SET_USER(response)
                this.state.statusLogin = true 
                const userdt    =  {
                    displayName: response.displayName,
                    urlPhoto: response.photoURL,
                    noTelp: response.phoneNumber,
                }
                userData().SET_INFO(userdt)  
            })
        },
        kedepan(){
            router.push('/')
            const navBar = document.getElementById('navbarSMK');
            navBar.classList.toggle('hide');
            navBar.classList.remove('show');
            this.state.statusNavBar = false
        }
    }

}
</script>

<style scoped>
 /* nav a:hover{
    background-color: blue;
    color:white
 } */
 nav a.router-link-active,
 nav a.router-link-exact-active {
   color: rgb(8, 97, 5);
   cursor: pointer;
   font:bolder;
 }
 #navigasi{
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
 }
 #txtsmk{
    color: darkblue
 }
 /* #txtazzahro{
    color:blue;
 } */
</style>