import React from 'react'
import Header from './Header'
import {checkvalidData} from '../utils/Validate'
import api from '../api/User.api.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice.jsx'
import { backgroundurl } from '../utils/Constents.jsx'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn,setSignIn]=React.useState(false);
  const[errorMessage , seterrorMessage]=React.useState();
  const name=React.useRef(null)
  const email=React.useRef(null)
  const password=React.useRef(null)


  const handleButtonClick = async() => {
    const message = checkvalidData(
      email.current?.value,
      password.current?.value,
      signIn ? null : name.current?.value
    );
    seterrorMessage(message);
  if (message) return;

  try {
    if (signIn) {
      // 🔐 LOGIN
      await api.post("/login", {
        email: email.current.value,
        password: password.current.value,
      });

      alert("Login Successful");
      dispatch(addUser(handleButtonClick));
      navigate("/browse");
    } else {
      // 📝 REGISTER
      await api.post("/register", {
        username: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });

      alert("Registration Successful");
      setSignIn(true);
    }
  } catch (error) {
    seterrorMessage(
      error.response?.data?.message || "Something went wrong"
    );
  }
};


  const SignInForm=()=>{
    setSignIn(!signIn);

  };
  return (
    <div className='relative w-full h-screen'>
        <div className='absolute w-full h-full -z-10'>
            <img src={backgroundurl} alt='background' className='w-full h-full object-cover'></img>
        </div>
        <Header/>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 rounded-lg text-white'>
            <h1 className='text-3xl font-bold mb-6 text-white'>{signIn ? "sign In": "sign Up"}</h1>
            {!signIn && (<input ref={name} type='text' placeholder='User name' className='p-4 m-2 bg-gray-700/70'></input>)}
            <input ref={email} type='email' placeholder='Email address' className='p-4 m-2 bg-gray-700/70'></input>
            <input ref={password} type='Password' placeholder='Password' className='p-4 m-2 bg-gray-700/70'></input>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 m-2 bg-red-700 rounded-lg w-full' onClick={handleButtonClick}>{signIn ? "sign In": "sign Up Now"}</button>
            <p className='text-white cursor-pointer' onClick={SignInForm}>New to Netflix Sign-up Now</p>
        </form>
    </div>
  );
};

export default Login; 