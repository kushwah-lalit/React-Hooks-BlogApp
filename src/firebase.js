import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArc4I7qFoNLSLW6i2UWJVzQDN0kk07pbA",
  authDomain: "react-hooks-blog-f1ffe.firebaseapp.com",
  projectId: "react-hooks-blog-f1ffe",
  storageBucket: "react-hooks-blog-f1ffe.appspot.com",
  messagingSenderId: "417722189984",
  appId: "1:417722189984:web:1c6af0d53446ab89f2e1c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
