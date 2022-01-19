import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = { //toto je dostupne v Project settings na portale firebase u projektu crown-db
    apiKey: "AIzaSyB65fi8EMc0_Aj7M3mAHmuEI2_foh6DXdk",
    authDomain: "crown-db-7c24e.firebaseapp.com",
    projectId: "crown-db-7c24e",
    storageBucket: "crown-db-7c24e.appspot.com",
    messagingSenderId: "476613971530",
    appId: "1:476613971530:web:6e99beef51d56da28720b3",
    measurementId: "G-0T6T8YCXFQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;