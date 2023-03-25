import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import{FaFacebook,FaGoogle, FaTwitter} from 'react-icons/fa';
import { Link,} from 'react-router-dom';
import 'animate.css'

export default function Login  () {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!email) {
      setEmailError(true);
      valid = false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setEmailError(true);
      valid = false;
    }
    else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } 
    
    else {
      setPasswordError(false);
    }

    // submit form if no errors
    if (email && password) {
      console.log("submitted");
    }
  };

return(
<div className="flex w-full h-screen esm:pt-10 pt-24 " >
    <div className="w-full flex items-center justify-center lg:w-1/2 bg-white-100 esm:px-0 px-2 ">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft  bg-white
    '> 
    <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Welcome back!</h1>
    <p>Please <span className=' font-bold'>Login</span> to continue your progress.</p>
    <form>
    <div className=' w-full esm:px-0 px-5 '>
      <div className='py-5 relative'>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} 
      required
      error={emailError}
      helperText={emailError && "Please enter a valid email address"}
      style={{width: '100%'}}/>
      </div>
      <div className='relative'>
      <TextField id="outlined-basic" label="Password" variant="outlined" type={'password'} style={{width: '100%'}}  value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        error={passwordError}
        helperText={passwordError && "Please enter a valid password"} />
      {passwordError && <span>{passwordError}</span>}
      </div>
    </div>
    </form>
    <div className="text-sm pt-3 text-center">
              <button className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </button>
            </div>
    <div className='mt-5 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
    <button type="submit" className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 'style={{width: '100%'}} onClick={handleSubmit}>Login</button>
      <div className='border-t-2 mt-3'/>
      <p className="text-gray-600 mr-4 pt-1">or sign in with</p>
    </div>
  
    <div className="mt-4 flex flex-col esme:space-x-5  esme:space-y-0 esme:flex-row eesm:space-y-5 justify-center items-center">
          
    <button className= "active:scale-[.98] active:duration-75 translate-all hover:scale-[1.25] ease-in-out text-gray-600 px-10 py-1 border-2 rounded font-bold hover:bg-blue-200 eesm:w-[70%]">
            <FaFacebook className="inline-block mb-1 " />
            {/* <span className="sr-only">Sign in with Facebook</span> */}
          </button>
    <button className=" active:scale-[.98] active:duration-75 translate-all hover:scale-[1.25] ease-in-out text-gray-600 px-10 py-1 border-2 rounded  font-bold hover:bg-red-200 eesm:w-[70%]">
            <FaGoogle className="inline-block mb-1" />
            {/* <span className="sr-only">Sign in with Google</span> */}
          </button>
    <button className= "active:scale-[.98] active:duration-75 translate-all hover:scale-[1.25] ease-in-out text-gray-600 px-10 py-1 border-2 rounded font-bold hover:bg-blue-200 eesm:w-[70%]">
            <FaTwitter className="inline-block mb-1 " />
            {/* <span className="sr-only">Sign in with Facebook</span> */}
          </button>
          
        </div>
        <div className='border-t-2 mt-4'/>
        <div className="text-sm pt-3 text-center">
              <span>Doesn't have an account </span>
              <Link to="register"><button className="font-medium text-indigo-600 hover:text-indigo-500" > Create one? </button></Link>
              
            </div>
    </div>
    </div>
    </div>
  );
};

  <div className=" hidden lg: h-full  items-center justify-center bg-white-100 ">
  <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-black rounded-full animate__animated animate__bounceInRight "/>
  </div>
  
