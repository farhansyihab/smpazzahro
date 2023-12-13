import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// import 'bootstrap/js/index.esm.js'
import 'bootstrap/js/dist/carousel.js'
import 'bootstrap/js/dist/base-component.js'
import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/collapse.js'
// import 'bootstrap/js/dist/button.js'


import { createApp } from 'vue'
// import './assets/style/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue';


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase/firebaseSettings'

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth        = getAuth(firebaseApp);
// const provider    = new GoogleAuthProvider();
const fbDatabase  = getDatabase(firebaseApp);
//const analytics   = getAnalytics(firebaseApp);
// firebase.initializeApp(firebaseConfig);

//createApp(App).mount('#app')
createApp(App)
  .use(createPinia())
  .use(router)
  .use(firebaseApp)
  .use(fbDatabase)
  .use(auth)
  .use(CKEditor)
  .mount('#app')
