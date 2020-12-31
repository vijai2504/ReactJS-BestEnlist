import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALMGbeEdSZL08s7QF6x3_tCJrHfBovbJE",
    authDomain: "quiz-app-a7f27.firebaseapp.com",
    projectId: "quiz-app-a7f27",
    storageBucket: "quiz-app-a7f27.appspot.com",
    messagingSenderId: "366876876579",
    appId: "1:366876876579:web:2582e910a69b77208eb696",
    measurementId: "G-DZB5DFGX57"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.PhoneAuthProvider(); 

export { auth, provider };
export default db;