import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAyBDZpVEHwwskQbUvrj-v6vIBz-eqoLak",
  authDomain: "boardgame-collection-d9eba.firebaseapp.com",
  projectId: "boardgame-collection-d9eba",
  storageBucket: "boardgame-collection-d9eba.appspot.com",
  messagingSenderId: "918855688405",
  appId: "1:918855688405:web:3213c6cf1447c83468c25c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;