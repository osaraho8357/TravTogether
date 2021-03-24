import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDedWR2SuvcMQdb3G7Y_OXaoKogqRX3n6E",
  authDomain: "travtogether-33e4e.firebaseapp.com",
  projectId: "travtogether-33e4e",
  storageBucket: "travtogether-33e4e.appspot.com",
  messagingSenderId: "488352657687",
  appId: "1:488352657687:web:1313981306b6a679448752",
  measurementId: "G-SCVL7NWDBB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).mount('#app')
