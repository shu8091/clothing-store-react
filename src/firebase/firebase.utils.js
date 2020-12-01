import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: "AIzaSyDhX3LO_EAZuZlzlTqiQOGOB8kncyDYjlQ",
  authDomain: "clothing-store-db-e0f83.firebaseapp.com",
  databaseURL: "https://clothing-store-db-e0f83.firebaseio.com",
  projectId: "clothing-store-db-e0f83",
  storageBucket: "clothing-store-db-e0f83.appspot.com",
  messagingSenderId: "161017068397",
  appId: "1:161017068397:web:1c4bb21788309fba2f7864",
  measurementId: "G-XRMDV6WY2F"
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;