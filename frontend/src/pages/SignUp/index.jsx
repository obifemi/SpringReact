import React from 'react';
import { useState } from 'react'
import axios from 'axios';



const SignUp = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // const button = document.getElementById('button')
    // button.setAttribute('disabled', '')

    const passwordCheckHandler = (event) => {
        console.log(event.target.value);

       

        
        if(password === confirmPassword){
            console.log('passwords match');
            document.getElementById('button').removeAttribute('disabled', '');
        }
        else{
            console.log('passwords do not match');
            document.getElementById('button').setAttribute('disabled', '');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8082/api/v1/user', {
            username, email, password
        })
    }

  

 
    return (
        <form onSubmit={onSubmit}>
            <h1>SignUp</h1>
            <div>
            <label htmlFor="username" >Username</label>
            <input onChange={(e) => setUsername(e.target.value)}   id='username'/>
            </div>
            
            <div>
            <label htmlFor="email">E-Mail</label>
            <input onChange={(e) => setEmail(e.target.value)}  id='email'/>
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} id='password'/>
            </div>

            <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword'/>
            </div>

            <button onClick={onSubmit} disabled={!password || (password!==confirmPassword)} id='button'>Sign Up</button>
            
           

        </form>
    );
};

export default SignUp;