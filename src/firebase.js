import firebase from "firebase/app";
import "firebase/database";

var app = {
    apiKey: "AIzaSyDXl6tKPmKZcTjxhAZq29z72BN3eKkWApo",
    authDomain: "shoppingportal-44e32.firebaseapp.com",
    databaseURL: "https://shoppingportal-44e32.firebaseio.com",
    projectId: "shoppingportal-44e32",
    storageBucket: "shoppingportal-44e32.appspot.com",
    messagingSenderId: "638889034718",
    appId: "1:638889034718:web:14a468c698374caccc934f",
    measurementId: "G-L5Y67LNBQZ"
  };
firebase.initializeApp(app);
  export const db = firebase.database();
  export const nameRef = db.ref('users');