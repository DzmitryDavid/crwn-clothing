import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFD4dfyRwosCeTfuFwc6NnKMGfSSj4a6I",
  authDomain: "crwn-db-87738.firebaseapp.com",
  projectId: "crwn-db-87738",
  storageBucket: "crwn-db-87738.appspot.com",
  messagingSenderId: "91381915136",
  appId: "1:91381915136:web:97a4548621a22635b242e5",
  measurementId: "G-5FHGXV6P3W"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfile = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email } = userAuth;
    const dateInvoked = new Date()

    try { 
      userRef.set({
        displayName,
        email,
        dateInvoked,
        ...additionalData
      })}
    catch {
        console.log('error');
      }
    }
    return userRef;
  }

export default firebase; 