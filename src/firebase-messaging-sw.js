importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyDDQr2RHt87P8KAaXyn0pp_jZy4UI1DmMo",
    authDomain: "ashwaninotificationproject.firebaseapp.com",
    databaseURL: "https://ashwaninotificationproject-default-rtdb.firebaseio.com",
    projectId: "ashwaninotificationproject",
    storageBucket: "ashwaninotificationproject.appspot.com",
    messagingSenderId: "799640560640",
    appId: "1:799640560640:web:d5e4d003b4d256887ea4e5",
    measurementId: "G-6P7B7KH5VZ"
});
const messaging = firebase.messaging();