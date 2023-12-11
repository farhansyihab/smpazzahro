<template>
    <div id="depan" :style="{ position: state.posisi, backgroundImage: state.backgroundImg, height: state.ukuranT, width: state.setUkuranP }">
        <div id="logoBesar" :style="{ backgroundImage: state.logoImg, width: state.setUkuranLogoTengah, height: state.setUkuranLogoTengah, left: state.setLogoTengah}"></div>
        <div id="txtAzzahra" :style="{ 
            backgroundImage: state.txtAzzahraImg, 
            width: state.setUkuranTxtZahra, 
            height: state.setTinggiTxtZahra, 
            left: state.setTxtZahraTengah,
            top: state.topAzzahra
            }">
        </div>
        <div id="txtKonten" :style="{ 
            backgroundImage: state.txtKontenImg, 
            width: state.setLebarTxt,
            height: state.setHeightTxt,
            left: state.setTxtTengah,
            top: state.setTopTxt
            }">
        </div>        
    </div>
</template>

<script>
import {computed,reactive} from "vue";

export default {
    name: "Depan",
    setup(){
        const alamat        = window.location.href
        const alamatURL     = new URL(alamat)
        const origin        = alamatURL.origin
        const lebarLayar    = window.screen.width
        const lebarTxt      = 497
        const tinggiTxt     = 46
        const state = reactive({
            backgroundImg: "url("+ origin + "/img/latar.jpg)",
            posisi: "relative",
            ukuranT: (screen.height - 150) + "px" ,
            ukuranP: (screen.width - 15) + "px",
            logoImg: "url("+ origin + "/img/logo.png)",
            txtAzzahraImg: "url("+ origin + "/img/azzahratxt.png)",
            topAzzahra: "",
            txtKontenImg: "url("+ origin + "/img/vocationaltxt.png)",
            heightTxt : tinggiTxt + "px",
            setUkuranP: computed(() => {
                if(lebarLayar > 600){
                    (screen.width - 15) + "px"
                }else{
                    screen.width + "px"
                }                
            }),
            setLogoTengah: computed(() => {
                if(lebarLayar > 600){
                    let ukuranLogo = (lebarLayar/5)
                    let tengahScreen = (lebarLayar/2) - (ukuranLogo/2)
                    state.topAzzahra = ukuranLogo  + "px"
                    return tengahScreen + "px"
                }else{
                    let ukuranLogo = (lebarLayar - 75)
                    let tengahScreen = (lebarLayar/2) - (ukuranLogo/2)
                    state.topAzzahra = (ukuranLogo + 25)  + "px"
                    return tengahScreen + "px"
                }
            }),
            setUkuranLogoTengah: computed(() => {
                if(lebarLayar > 600){
                    return (lebarLayar/5) + "px"
                }else{
                    return (lebarLayar - 75) + "px"
                }
                
            }),
            setTxtZahraTengah: computed(() => {
                if(lebarLayar > 600){
                    let ukuranLogo = (1366/3)
                    let tengahScreen = (lebarLayar/2) - (ukuranLogo/2)
                    return tengahScreen + "px"
                }else{
                    let ukuranLogo = (lebarLayar - 60)
                    let tengahScreen = (lebarLayar/2) - (ukuranLogo/2)+ 15
                    return tengahScreen + "px"
                }                
            }),
            setUkuranTxtZahra: computed(() => {
                if(lebarLayar > 600){
                    return (1366/3) + "px"
                }else{
                    return (1366/5) + "px"
                }                
            }),
            setTinggiTxtZahra: computed(() => {
                if(lebarLayar > 600){
                    return (515/3) + "px"
                }else{
                    return (515/5) + "px"
                }                
            }),
            setLebarTxt: computed(() => {
                const lbrTxt = lebarTxt + "px"
                const lbrKecil = (lebarTxt/2) + "px"
                if(lebarLayar>600){
                    return lbrTxt
                }else{
                    return lbrKecil
                }
            }),
            setHeightTxt: computed(() => {
                const tnggi     = tinggiTxt + "px"
                const tnggikcl  = (tinggiTxt/2) + "px"
                if(lebarLayar>600){
                    return tnggi
                }else{
                    return tnggikcl
                }
            }),
            setTopTxt: computed(()=>{
                if(lebarLayar>600){
                    return '420px'
                }else{
                    return '450px'
                }
            }),
            setTxtTengah: computed(() => {
                if(lebarLayar > 600){
                    let ukuranLogo = (1366/3)
                    let tengahScreen = (lebarLayar/2) - (lebarTxt/2)
                    return tengahScreen + "px"
                }else{
                    let ukuranLogo = (lebarLayar - 60)
                    let tengahScreen = (lebarLayar/2) - (lebarTxt/4)
                    return tengahScreen + "px"
                }                
            }),
        }) 
        return {state};
    },
}
</script>
<style scoped>
    #depan{
        z-index: 1;
        background-repeat: repeat;
        background-position: center;
        overflow: hidden;
    }
    #logoBesar{
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
        top:50px;
        background-size: cover;
    }
    #txtAzzahra{
        z-index: 2;
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    #txtKonten{
        z-index: 2;
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }    
</style>