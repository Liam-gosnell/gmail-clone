import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeRcOtLL8p8S6Ymf0y9lIx7AEGpep23hw",
    authDomain: "clone-9ba14.firebaseapp.com",
    projectId: "clone-9ba14",
    storageBucket: "clone-9ba14.appspot.com",
    messagingSenderId: "882688598880",
    appId: "1:882688598880:web:b8dc0276bbeaa39f67b405"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };