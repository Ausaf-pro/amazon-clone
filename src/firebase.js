import firebase from 'firebase'


const firebaseConfig = {
   apiKey: "AIzaSyBJL3EGU4_4c-T3SaK8vO89PTlVDFnA33Y",
   authDomain: "clone-2a475.firebaseapp.com",
   projectId: "clone-2a475",
   storageBucket: "clone-2a475.appspot.com",
   messagingSenderId: "1024835460575",
   appId: "1:1024835460575:web:7476c03391d705d082f86a",
   measurementId: "G-9GM4QKXZYX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};