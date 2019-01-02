import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBlDKB8sYNUFoRD_KfIIxnk813hVFbo3m0",
  authDomain: "todo-vuetify-47366.firebaseapp.com",
  databaseURL: "https://todo-vuetify-47366.firebaseio.com",
  projectId: "todo-vuetify-47366",
  storageBucket: "todo-vuetify-47366.appspot.com",
  messagingSenderId: "232122901139"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
