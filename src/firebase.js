// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlRt61JZdrkRhfY3Govb21R2olmroKDpY",
  authDomain: "facebook-1248f.firebaseapp.com",
  projectId: "facebook-1248f",
  storageBucket: "facebook-1248f.appspot.com",
  messagingSenderId: "34961806744",
  appId: "1:34961806744:web:56c8f4b1f7ba24230607ed",
  measurementId: "G-KM24CV1LJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();


export {app};
export {analytics}
export {db}