import React from 'react';
import { useState } from 'react'




const SignUp = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
  

 
    return (
        <div>
            <h1>SignUp</h1>
            <div>
            <label htmlFor="username" >Username</label>
            <input   id='username'/>
            </div>
            
            <div>
            <label htmlFor="email">E-Mail</label>
            <input  id='email'/>
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} id='password'/>
            </div>

            <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword'/>
            </div>

            <button disabled={!password || (password!==confirmPassword)} id='button'>Sign Up</button>
            
           

        </div>
    );
};

export default SignUp;