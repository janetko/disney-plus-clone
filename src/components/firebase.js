import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8tNnUh4OWHcYj3yDtlQ_WsUAmvb-lJ1Y",
  authDomain: "disneyplus-clone-b3766.firebaseapp.com",
  projectId: "disneyplus-clone-b3766",
  storageBucket: "disneyplus-clone-b3766.appspot.com",
  messagingSenderId: "1022446744822",
  appId: "1:1022446744822:web:0bd6e284442cc3499e68d7",
  measurementId: "G-7ESMSM2W52"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth, provider, storage };
export default db
