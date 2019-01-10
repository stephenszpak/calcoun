import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDt5P9j3aNCVLHNBO9Qkt-Aj_FG59ttQ_g",
  authDomain: "calcoun-cba83.firebaseapp.com",
  databaseURL: "https://calcoun-cba83.firebaseio.com",
  projectId: "calcoun-cba83",
  storageBucket: "calcoun-cba83.appspot.com",
  messagingSenderId: "59281265537"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;