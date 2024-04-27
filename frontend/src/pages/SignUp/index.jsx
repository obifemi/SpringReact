import React from 'react';
import { useState } from 'react'
import axios from 'axios';



const SignUp = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [apiProcess, setApiProcess] = useState(false);



    const onSubmit = (e) => {
        setApiProcess(true);
        e.preventDefault();
        axios.post('/api/v1/user', {
            username, email, password
        }).then((res) => {
            console.log(res);
            setApiProcess(false);
        }).catch((err) => {
            console.log(err);
            setApiProcess(true);
        });
    }




    return (
        <div className='container offset-lg-3 col-lg-6'>

            <form onSubmit={onSubmit}>

                <h1 className='text-center'>SignUp</h1>

                <div>
                    <label className='form-label' htmlFor="username" >Username</label>
                    <input className='form-control' onChange={(e) => setUsername(e.target.value)} id='username' />
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



            </form>

        </div>
    );
};

export default SignUp;