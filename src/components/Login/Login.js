import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
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
            <button onClick={handlerGoogle} className='login-button'><FontAwesomeIcon icon={faFacebook}/> Continue With Facebook</button>
        </div>
    )
}

export default Login
