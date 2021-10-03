import React, { useContext } from 'react';
import './Login.css'
import loginGroup from '../../../images/login-group.png'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import NavBar from '../../ShareComponents/NavBar/NavBar'
import "firebase/auth";
import googleIcon from '../../../images/google.png'
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../../App'
import { GoogleAuthProvider } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleLoginForm = () => {

    }
    const handleGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const userInfo = result.user;
                const email = userInfo.email;
                const photo = userInfo.photoURL;
                const newUser = { ...user };
                newUser.email = email;
                newUser.photo = photo;
                setUser(newUser);
                sessionStorage.setItem('email', email)
                sessionStorage.setItem('photo', photo)
                history.push('/appointment');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(error)
            });

    }
    return (
        <div className="login-section">
            <NavBar />
            <section>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="input-container">
                                <form onSubmit={handleLoginForm}>
                                    <h2>LOGIN</h2>
                                    <div className="input-fields">
                                        <div className="username">
                                            <input type="text" placeholder="User Name" />
                                        </div>
                                        <div className="password">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <input className="signIn-btn" type="submit" value="Sign In" />
                                </form>
                                <div className="position-relative">
                                    <p className="or-style">OR</p>
                                </div>
                                <div className="google">
                                    <button onClick={handleGoogle}><img src={googleIcon} className="img-fluid google-img-style" alt="" /> Sign In Google</button>
                                </div>
                                <p>Forger your password? <a href="/">Click Here</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-end img-container">
                            <div>
                                <img src={loginGroup} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;