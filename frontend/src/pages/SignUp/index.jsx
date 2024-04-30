import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import {signUp} from './api'


const SignUp = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [apiProcess, setApiProcess] = useState(false);
    const [response, setResponse] = useState(false);


    const onSubmit = (e) => {
        setResponse(false)
        setApiProcess(true);
        e.preventDefault();
        signUp({username, email, password})
        .then((res) => {
            
            setApiProcess(false);
            setResponse(false)
        }).catch(axiosError => {
            setApiProcess(false);
            console.log(axiosError.response.data.message);
            setResponse(axiosError.response.data.message);
        }    
        )
    }




    return (
        <div className='container offset-lg-3 col-lg-6'>

            <form onSubmit={onSubmit}>

                <h1 className='text-center'>SignUp</h1>

                <div>
                    <label className='form-label' htmlFor="username" >Username</label>
                    <input className={`form-control ${response ? 'is-invalid' : ''}`} onChange={(e) => setUsername(e.target.value)} id='username' />
                    <p className='text-danger'>{response}</p>
                </div>


                <div>
                    <label className='form-label' htmlFor="email">E-Mail</label>
                    <input className='form-control' onChange={(e) => setEmail(e.target.value)} id='email' />
                </div>

                <div>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='form-control' onChange={(e) => setPassword(e.target.value)} id='password' />
                </div>

                <div>
                    <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
                    <input className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword' />
                </div>

                <button className='btn btn-primary mt-1' onClick={onSubmit} disabled={apiProcess || (!password || (password !== confirmPassword))} id='button'>Sign Up</button>
                <div  className={response ? 'alert alert-success mt-2' : 'd-none'}>{response}</div>


            </form>

        </div>
    );
};

export default SignUp;