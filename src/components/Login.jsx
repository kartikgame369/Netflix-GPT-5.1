import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className=' absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_medium.jpg' alt='background'></img>
        </div>
        <form className=' absolute w-3/12  p-12 bg-yellow-200 left-0 right-0  mx-auto my-36 '>
            <input type='email' placeholder='Email address' className='p-2 m-2'></input>
            <input type='Password' placeholder='Password' className='p-2 m-2'></input>
            <button>Sign In</button>
        </form>
    </div>
   
  );
};

export default Login