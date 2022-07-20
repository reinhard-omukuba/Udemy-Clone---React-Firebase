import React, { useRef } from 'react'
import {db} from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 


function Register() {
    let navigate = useNavigate();

    //get data from input
    const emailRef = useRef();
    const passwordRef = useRef();
    const userRef = useRef();

    function SignUpUser(){

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = userRef.current.value;

        //run firebase stuff here
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            setDoc(doc(db, "users", user.uid), {
                userName: username,
                userEmail: email,
                userId: user.uid
            }).then(()=>{
                navigate("/profile")
            })
    
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });



    }

  return (
    <div>

        <h1>Register</h1>
        <input type="text" ref={userRef} placeholder='Enter your Name' />
        <input type="email" ref={emailRef} placeholder='Enter your Email' />
        <input type="password" ref={passwordRef} placeholder='Enter your Password'/>
        <button onClick={SignUpUser}>Submit</button>

        <p>Dont have an account? <Link to="/login">Sign in</Link> </p>

    </div>
  )
}

export default Register