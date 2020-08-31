import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASxHYMstoEHtj0JQlpjbOark7gwzKM6nA",
  authDomain: "whatsapp-clone-9d275.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9d275.firebaseio.com",
  projectId: "whatsapp-clone-9d275",
  storageBucket: "whatsapp-clone-9d275.appspot.com",
  messagingSenderId: "51930795893",
  appId: "1:51930795893:web:e3cb641e75297d3b514d3c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
