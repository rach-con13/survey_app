import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3T8QKN1Jg3BpPPrRy9ZhDHbjb8BHf4dY",
  authDomain: "movie-f5494.firebaseapp.com",
  databaseURL: "https://movie-f5494.firebaseio.com",
  projectId: "movie-f5494",
  storageBucket: "movie-f5494.appspot.com",
  messagingSenderId: "787362600226",
  appId: "1:787362600226:web:a39a59463f44ed8688017b",
  measurementId: "G-B69J4DZ5XJ",
};

// Initialize Firebase
if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

export let db = Firebase.firestore();
export default Firebase;
