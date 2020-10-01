import firebase from "firebase";
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4T3eadtJ0vx5Q5dviTVQIRsqPlkEMnpo",
    authDomain: "whatsapp-clone-d4abd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d4abd.firebaseio.com",
    projectId: "whatsapp-clone-d4abd",
    storageBucket: "whatsapp-clone-d4abd.appspot.com",
    messagingSenderId: "337351790474",
    appId: "1:337351790474:web:4504e1190ebbd29bed4273",
    measurementId: "G-HJMF9DG8TM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 

  export {auth, provider};
  export default db;