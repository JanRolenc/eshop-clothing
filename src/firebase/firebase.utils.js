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

//pro ukladani prihlasenych do databaze firestore:
export const createUserProfileDocument = async(userAuth, additionalData) => { //userAuth je ten obri objekt vc. displayName, email, co mohu videt v konzoli po prihlaseni; pri neprihlasenem je tam null 
    if (!userAuth) return; //kdyz neni, nedelej nic

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); //snapshot rika, zda reference(misto) obsahuje nejaka data
    // console.log(snapShot);

    if (!snapShot.exists) { //pokud nejsou data, tak specifikujeme, ktera chceme ulozit/vytvorit
        const { displayName, email } = userAuth;
        const createdAt = new Date(); //abychom vedeli i datum ulozeni noveho zaznamu
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;