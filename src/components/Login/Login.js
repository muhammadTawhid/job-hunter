import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import { Link } from "react-router-dom";
import firebaseConfig from "./Firebase/FirebaseConfig";
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
function Login() {

    const handlerGoogle =() =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorMessage = error.message;
    alert(errorMessage)
  });
    }
    return (
        <div className='login-content'>
            <Link to='/' onClick={handlerGoogle} className='login-button' ><FontAwesomeIcon icon={faGoogle}/> Continue With Google</Link>
        </div>
    )
}

export default Login
