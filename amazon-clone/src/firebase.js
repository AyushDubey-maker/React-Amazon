import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({

    
        apiKey: "AIzaSyBx7S0pJKpBirt7LdJrtWsD4B_1f3ZiI64",
        authDomain: "react-6c24e.firebaseapp.com",
        projectId: "react-6c24e",
        storageBucket: "react-6c24e.appspot.com",
        messagingSenderId: "609412974443",
        appId: "1:609412974443:web:27d0b37a29fa282336ee2e"
})

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};
  