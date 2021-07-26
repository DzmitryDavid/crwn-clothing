import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFD4dfyRwosCeTfuFwc6NnKMGfSSj4a6I",
    authDomain: "crwn-db-87738.firebaseapp.com",
    projectId: "crwn-db-87738",
    storageBucket: "crwn-db-87738.appspot.com",
    messagingSenderId: "91381915136",
    appId: "1:91381915136:web:97a4548621a22635b242e5",
    measurementId: "G-5FHGXV6P3W"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 