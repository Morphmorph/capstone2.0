import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import{FaFacebook,FaGoogle, FaTwitter} from 'react-icons/fa';
import { Link,} from 'react-router-dom';
import 'animate.css'

export default function Confirmemail  () {
 
  const [email, setEmail] = useState("");
  
  const [emailError, setEmailError] = useState("");
 

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

   
    // submit form if no errors
    if (email) {
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
    <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Verify</h1>
    <p>Please<span className=' font-bold'> provide</span> your valid email address to continue </p>
    <form>
    <div className=' w-full esm:px-0 px-5 '>
      <div className='py-5 relative'>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} 
      required
      error={emailError}
      helperText={emailError && "Please enter a valid email address"}
      style={{width: '100%'}}/>
      </div>
     
    </div>
    </form>
    
    <div className='mt-4 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
    <button type="submit" className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 'style={{width: '100%'}} onClick={handleSubmit}>Login</button>
      
      <Link to="/register"><button className="font-medium text-indigo-600 hover:text-indigo-500 mt-5" > Cancel</button></Link>
    </div>
  
    
    </div>
    </div>
    </div>
  );
};

  <div className=" hidden lg: h-full  items-center justify-center bg-white-100 ">
  <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-black rounded-full animate__animated animate__bounceInRight "/>
  </div>
  
