import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
// import axios from 'axios'
import router from './router'
import store from './store'
import axios from 'axios'

// const env = process.env.VUE_APP_FIREBASE_API_KEY;

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_FIREBASE_BASE_URL;


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




store.dispatch('autoLogin').then(() => {

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
