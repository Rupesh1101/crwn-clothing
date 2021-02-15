import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8sF3qnimkLAMl_h-3PtjMfpfn0_iPusQ",
    authDomain: "crwn-db-6734b.firebaseapp.com",
    projectId: "crwn-db-6734b",
    storageBucket: "crwn-db-6734b.appspot.com",
    messagingSenderId: "284917242064",
    appId: "1:284917242064:web:60688af626aca76921a6d5",
    measurementId: "G-30N91S5JSQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;