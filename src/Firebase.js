import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNtHbCxQGcC0OUthlKmXWnTJbwKPlJl_w",
    authDomain: "twitter-clone-90fb9.firebaseapp.com",
    projectId: "twitter-clone-90fb9",
    storageBucket: "twitter-clone-90fb9.appspot.com",
    messagingSenderId: "211622284618",
    appId: "1:211622284618:web:81bda570c833bd07c545b3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;