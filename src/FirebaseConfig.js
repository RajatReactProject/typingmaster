import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApjb0pVYJHogpCMWBBckqS78kJt2Z7yeU",
  authDomain: "typingtestrajat.firebaseapp.com",
  projectId: "typingtestrajat",
  storageBucket: "typingtestrajat.appspot.com",
  messagingSenderId: "99621207729",
  appId: "1:99621207729:web:de5d022763d4322fd5ac90",
  measurementId: "G-50DVFMR029"
};
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db = firebase.firestore();
  export  {auth,db}
 