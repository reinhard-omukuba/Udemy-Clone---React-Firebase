import React, { useRef } from 'react'
import {Link } from "react-router-dom";
import '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  let navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  function SignInUser(){

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...

        console.log("user logged in")
        navigate("/profile")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)
      });

  }


  return (
    <div>

        <h1>Login</h1>
        <input type="text" ref={emailRef} placeholder='Enter your Email' />
        <input type="password"  ref={passwordRef} placeholder='Enter your Password'/>
        <button onClick={SignInUser}>Submit</button>

        <p>Dont have an account? <Link to="/">Register</Link> </p>


    </div>
  )
}

export default Login