// add config of new gmail login ID..

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDjZrM4MCV1pyyiTL9JYDrWNtk7c1wpDVw",
  authDomain: "clone-6de4a.firebaseapp.com",
  projectId: "clone-6de4a",
  storageBucket: "clone-6de4a.appspot.com",
  messagingSenderId: "805313732623",
  appId: "1:805313732623:web:7981f31f8c00d7e28b437a",
  measurementId: "G-ZY1L7X7TXS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};