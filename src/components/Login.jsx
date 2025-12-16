import React from 'react'
import Header from './Header'

const Login = () => {
  const [signIn,setSignIn]=React.useState(true);

  const SignInForm=()=>{
    setSignIn(!signIn);

  };
  return (
    <div>
        <Header/>
        <div className=' absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_medium.jpg' alt='background'></img>
        </div>
        <form className=' w-3/12 absolute p-12 bg-black/70 bg-opacity-50 my-36 mx-auto right-0 left-0 rounded-lg text-white'>
            <h1 className=' text-3xl font-bold mb-6 text-white'>{SignInForm ? "sign In": "sign Up"}</h1>
            {!SignInForm && (<input type='text' placeholder='User name' className='p-4 m-2 bg-gray-700'></input>)}
            <input type='email' placeholder='Email address' className='p-4 m-2 bg-gray-700'></input>
            <input type='Password' placeholder='Password' className='p-4 m-2 bg-gray-700'></input>
            <button className=' p-4 m-2 bg-red-700 rounded-lg w-full'>{SignInForm ? "sign In": "sign Up Now"}</button>
            <p className='text-white'onClick={SignInForm}>New to Netflix Sign-up Now</p>
        </form>
    </div>
   
  );
};

export default Login; 