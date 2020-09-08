import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";
import "firebase/analytics";

Vue.prototype.$axios = axios;
Vue.config.productionTip = true;
const firebaseConfig = {
  apiKey: "AIzaSyDJXGG5GuZmIFtgv84J3nTD-I_S6ler0lE",
  authDomain: "qr-store-b4eb7.firebaseapp.com",
  databaseURL: "https://qr-store-b4eb7.firebaseio.com",
  projectId: "qr-store-b4eb7",
  storageBucket: "qr-store-b4eb7.appspot.com",
  messagingSenderId: "750486670700",
  appId: "1:750486670700:web:2816d83324499f12b97749",
  measurementId: "G-9N2REYD743"
};
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


