import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.displayName,
                        profileURL: userAuth.photoURL,
                    })
                );
            })
            .catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,

                            })
                        );
                    });

            })
            .catch(error => alert(error));
    };
    return (
        <div className="login">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/768px-LinkedIn_Logo_2013.svg.png?20210531155021'
                alt=''
            />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name(required if registering)' type="text" />

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type='text' />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email' />

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' />

                <button type='submit' onClick={loginToApp}>Sign In</button>

            </form>

            <p>Not a member?{""}</p>
            <span className="login_register" onClick={register}>Register now</span>
        </div>
    )
}

export default Login