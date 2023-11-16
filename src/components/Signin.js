import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Signin.css'
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            if(userCredentials)
            navigate("/");
        })
        .catch((error) => alert(error.message));
    }

    const register = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            if(userCredentials)
            navigate("/");
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className='row'>
            <Link className='col-12' to='/'>
            <img className='signin-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322'/>
            </Link>
           
            <div className='signin-cont col-sm-6 col-md-6 col-lg-4'>
                <h1>Sign-in</h1>
                <form>
                    <h4>Email</h4>
                    <input type='email' 
                    value={email} 
                     onChange={(e)=>setEmail(e.target.value)}
                    />

                    <h4>Password</h4>
                    <input type='password' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button className='signin' type='submit' 
                    onClick={signIn} 
                    >
                        Sign In</button>
                </form>

                <p>By Signing in you agree to AMAZON FAKE CLONE conditions and terms. Please see our Privacy Policy, Cookies and Ad-Noyices.</p>

                <button onClick={register} className='create'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Signin;
