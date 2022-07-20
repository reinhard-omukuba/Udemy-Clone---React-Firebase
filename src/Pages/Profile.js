import React, { useState } from 'react'
import {db} from '../firebase';
import { getAuth, onAuthStateChanged, signOut  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";

function Profile() {

  let navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //if user is logged in 
      const uid = user.uid;

      
      const q = query(collection(db, "users"), where("userId", "==", uid));

      console.log(q)

      getDocs(q).then((QuerySnapshot)=>{
        QuerySnapshot.forEach((doc)=>{

          const username = doc.data().userName;

          console.log(username)
          setLoggedInUser(username);
        })
      })
      



      const userEmail = user.email;

      //

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  function SignOutUser(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>


      <h1>Hello world</h1>

      <p>{loggedInUser}</p>


      <button onClick={SignOutUser}>Logout</button>
    </div>
  )
}

export default Profile