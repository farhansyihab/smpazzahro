<template>
    <div class="container-fluid bg-dark py-2 d-md-flex">
        <div class="container">
            <div class="d-flex justify-content-between topbar">
                <div class="top-info">
                    <small class="me-3 text-white-50"><a href="mailto:smkazzahropalembang@gmail.com"><i class="bi bi-envelope-at me-2 text-secondary" style="font-size: 25px;"></i></a></small>
                </div>
                <div id="note" class="text-secondary d-none d-xl-flex"><small>Trust us to bring Your vision to live</small></div>
                <div class="top-link">
                    <a href="https://wa.me/62895388726164" class="bg-primary nav-fill btn btn-sm-square rounded-circle"><i class="bi bi-whatsapp text-dark" style="font-size: 20px;"></i></a>
                    <a href="https://www.instagram.com/smkazzahro_/" class="bg-primary nav-fill btn btn-sm-square rounded-circle"><i class="bi bi-instagram text-dark" style="font-size: 20px;"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <div id="navigasi" class="container-fluid">
        <div class="container">
            <nav class="navbar navbar-dark navbar-expand-lg py-0">
                <a :href="state.urlDepan"> <!-- tidak pakai router link karena pengaruh ke active nav-->
                    <h1 id="txtsmk" class="fw-bold d-block">SMP <span id="txtazzahro">AZZAHRO</span> </h1>
                </a>
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
                                <router-link @click="tutupNavBar()" :to="{ path: '/visi', hash: '#visi'}" class="dropdown-item">Visi & Misi Satuan Pendidikan</router-link>
                                <router-link @click="tutupNavBar()" :to="{ path: '/visi', hash: '#tujuan'}" class="dropdown-item">Tujuan Satuan Pendidikan</router-link>
                            </div>
                        </div>
                        <router-link @click="tutupNavBar()" :to="{ path: '/login'}" class="nav-item nav-link" class-active="active" v-if="!state.cekUlangLogin">Login</router-link>
                        <div class="nav-item dropdown"  v-if="state.cekUlangLogin">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Menu User</a>
                            <div class="dropdown-menu rounded">
                                <router-link @click="tutupNavBar()" :to="{ name: 'tambahuser'}" class="dropdown-item">Tambah User</router-link>
                                <!-- <router-link @click="tutupNavBar()" :to="{ name: 'datacontact'}" class="dropdown-item">Respon Pengunjung</router-link> -->
                                <router-link @click="LogOut()" :to="{ name: 'depan'}" class="dropdown-item">LogOut</router-link>
                            </div>
                        </div>
                        <router-link @click="tutupNavBar()" :to="{ name: 'kontak'}" class="nav-item nav-link" class-active="active">Hubungi Kami</router-link>
                    </div>
                </div>
                <div class="d-none d-xl-flex flex-shirink-0">
                    <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
                        <a href="https://wa.me/62895388726164" class="position-relative animated tada infinite">
                            <i class="bi bi-telephone bi-2x" style="font-size: 35px;"></i>
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
import { signOut  } from "firebase/auth"
import { auth } from '../firebase/index.js'
import { userData } from "../store/user/index.js"
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
   color: rgb(12, 79, 138);
   cursor: pointer;
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