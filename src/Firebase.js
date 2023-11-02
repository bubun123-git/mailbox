import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Import Firestore module
import 'firebase/compat/auth'; // Import Authentication module
// Other Firebase services can be imported similarly


const firebaseConfig = {
    apiKey: "AIzaSyCEG5Gwod_DMWZIDeZRt0cV16yPtodXr2c",
    authDomain: "mailbox-client-d6359.firebaseapp.com",
    projectId: "mailbox-client-d6359",
    storageBucket: "mailbox-client-d6359.appspot.com",
    messagingSenderId: "343325787034",
    appId: "1:343325787034:web:3fffc3d71ed1a6b7fe7023",
    measurementId: "G-YBV29JFTX6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };