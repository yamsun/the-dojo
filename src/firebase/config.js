import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyB4SRrn171k4BgkHrfH1TT-0dtQw8toB1s",
    authDomain: "thedojosite-41802.firebaseapp.com",
    projectId: "thedojosite-41802",
    storageBucket: "thedojosite-41802.appspot.com",
    messagingSenderId: "418573201825",
    appId: "1:418573201825:web:f66678f1c67d8359dc9be0"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp, projectStorage} 