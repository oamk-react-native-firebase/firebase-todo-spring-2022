import firebase from "firebase/compat";

const firebaseConfig = ({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const ROOT_REF = '/todos/';