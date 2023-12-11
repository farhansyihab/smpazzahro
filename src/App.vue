<template>
  <Atas />
  <router-view/>
  <Bawah />
</template>

<script>
import Atas from './partial/Atas.vue'
import Bawah from './partial/Bawah.vue'
// import { onBeforeMount } from 'vue';
// import { useStore } from 'vuex';

export default {
  name: 'App',
  data(){
    return{
      // statusLogin: false
    }
  },
  components : { Atas, Bawah },
  setup() {}
}
</script>
