import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAtVSvFIiIa71GndsWprPTDKKuixeC2QiE",
    authDomain: "vue-firebase-auth-4e14d.firebaseapp.com",
    projectId: "vue-firebase-auth-4e14d",
    storageBucket: "vue-firebase-auth-4e14d.appspot.com0",
    messagingSenderId: "389590768452",
    appId: "1:389590768452:web:3142f1c1e730df14ef5511",
    measurementId: "G-3MEEY7PBRK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
