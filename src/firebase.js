
import firebase from 'firebase/app';
import 'firebase/auth';  
import 'firebase/database'; 
import 'firebase/storage';  
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRi0zISOqDuDLrcXsFXxY7M1KyRAMGxmg",
  authDomain: "disneyplus-4c790.firebaseapp.com",
  projectId: "disneyplus-4c790",
  storageBucket: "disneyplus-4c790.appspot.com",
  messagingSenderId: "7600941082",
  appId: "1:7600941082:web:6d6daff723d3dd868789a3",
  measurementId: "G-BQVG7Q00P2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;