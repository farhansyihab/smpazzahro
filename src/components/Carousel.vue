<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div v-for="isiArray in dataCarousel" :key="isiArray.id" class="carousel-item" v-bind:class="{ active:isiArray.active }">
            <img v-bind:src="isiArray.image" class="img-fluid" alt="First slide">
            <div class="carousel-caption">
                <div class="container carousel-content">
                    <h3 class="text-primary h3 animated fadeInUp"><strong>{{ isiArray.judul }}</strong></h3>
                    <h5 class="text-danger display-6 mb-4 animated fadeInRight"><strong>{{ isiArray.subJudul }}</strong></h5>
                    <p class="mb-4 text-white-50 bg-dark fs-5 animated fadeInDown">{{ isiArray.isiText }}</p>
                </div>
            </div>
        </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>    
</template>
<script>
import {computed, reactive} from "vue";
export default {
    name: 'Carousel',
    props: {
        dataCarousel: {
            type: Array,
            required: true
        }
    },
    setup(){
        const ukuranLayar   = reactive({
            smartPhone : computed(() => {
                const lebarLayar    = window.screen.width
                if(lebarLayar < 500 ) {
                    return true
                }else{
                    return false
                }
            }),
            pc: computed(()=>{
                const lebarLayar    = window.screen.width
                if(lebarLayar > 1200 ) {
                    return true
                }else{
                    return false
                }
            })
        })
    },
}
</script>
<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
}
</style>