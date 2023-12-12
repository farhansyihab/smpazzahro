<template>
    <div id="depan" :style="{ 
                            position: state.posisi, 
                            backgroundImage: state.backgroundImg, 
                            height: state.ukuranT, 
                            width: state.setUkuranP, 
                            }">
        <div id="logoBesar" :style="{ backgroundImage: state.logoImg, width: state.setUkuranLogoTengah, height: state.setUkuranLogoTengah, left: state.setLogoTengah, top: state.setTopLogo}"></div>
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
        const tinggilayar   = window.screen.height
        const state = reactive({
            backgroundImg: "url("+ origin + "/img/latar.png)",
            posisi: "relative",
            ukuranT: (tinggilayar - 15) + "px" ,
            ukuranP: (screen.width - 15) + "px",
            logoImg: "url("+ origin + "/img/logo.png)",
            topImage: "",
            topAzzahra: "",
            setUkuranP: computed(() => {
                if(lebarLayar > 900){
                    (screen.width - 15) + "px"
                }else{
                    screen.width + "px"
                }                
            }),
            setTopLogo: computed(() => {
                if(lebarLayar > 900){
                    return "-" + (tinggilayar/14) + "px"
                }else{
                    return "0px"
                }                
            }),
            setLogoTengah: computed(() => {
                if(lebarLayar > 900){
                    let ukuranLogo = (lebarLayar/2)
                    let tengahScreen = (lebarLayar/2) - (ukuranLogo/2)
                    state.topAzzahra = "1px"
                    return tengahScreen + "px"
                }else{
                    let ukuranLogo = (lebarLayar + 50)
                    let tengahScreen = (lebarLayar/2) - (ukuranLogo/2)
                    state.topAzzahra = (ukuranLogo + 25)  + "px"
                    return tengahScreen + "px"
                }
            }),
            setUkuranLogoTengah: computed(() => {
                if(lebarLayar > 900){
                    return (lebarLayar/2) + "px"
                }else{
                    return (lebarLayar + 50) + "px"
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
        background-repeat:no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
    }
    #logoBesar{
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
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