import React from 'react';

const SignUp = () => {
    const userNameChangeHandler = (event) => {
        console.log(event);
    }
    return (
        <div>
            <h1>SignUp</h1>
            <div>
            <label htmlFor="username" >Username</label>
            <input onChange={userNameChangeHandler} id='username'/>
            </div>
            
            <div>
            <label htmlFor="email">E-Mail</label>
            <input id='email'/>
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input id='password'/>
            </div>

            <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id='confirmPassword'/>
            </div>

            <button>Sign Up</button>
            
           

        </div>
    );
};

export default SignUp;