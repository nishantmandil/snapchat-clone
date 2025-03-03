import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDflvxK_iovCRevYzgydLzZvouP9P7SC3M",
    authDomain: "snapchat-n.firebaseapp.com",
    projectId: "snapchat-n",
    storageBucket: "snapchat-n.appspot.com",
    messagingSenderId: "987059705931",
    appId: "1:987059705931:web:905611e3aadd8b3cf415ce",
    measurementId: "G-5XT9SQCK0D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };