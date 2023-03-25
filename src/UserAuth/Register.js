import React, { useState } from "react";
import { TextField } from '@mui/material';
import { Link, Route,} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import 'animate.css'


const currencies = [
    {
      value: 'STD',
      label: 'Student',
    },
    {
      value: 'EMP',
      label: 'Employer',
    },
  ];
  export default function Register () {
 
 
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 
 const [emailError, setEmailError] = useState(false);
 const [passwordError, setPasswordError] = useState(false);
 const [confirmPasswordError, setConfirmPasswordError] = useState(false);

 const handleSubmit = (e) => {
   e.preventDefault();

   // validate name, email, password, and confirm password

   if (!email) {
     setEmailError(true);
   } else {
     setEmailError(false);
   }

   if (!password) {
     setPasswordError(true);
   } else {
     setPasswordError(false);
   }

   if (!confirmPassword || confirmPassword !== password) {
     setConfirmPasswordError(true);
   } else {
     setConfirmPasswordError(false);
   }

   // submit form if no errors
   if (email && password && confirmPassword === password) {
     
   }
 };
  return(
    <div className="flex w-full h-screen esm:pt-14 pt-36" >
    <div className="w-full flex items-center justify-center lg:w-1/2 bg-white-100 sm:px-0 px-2">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-5 lg:pb-8 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-8 md:pb-8 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-5 sm:pb-10 sm:rounded-xl sm:text-center sm:mx-10
    esm:border-2 esm:px-5 esm:pt-5 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-5 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft  bg-white
    '>
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Welcome!</h1>
      <p>Please <span className=' font-bold'>Register</span> to explore the HAN<span className=' text-blue-700'>APP</span></p>
      <div className=' w-full esm:px-0 px-5 '>
        <div className='py-5'>
        <TextField
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Please choose user type"
            style={{width: '100%', marginBottom: 5}}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        <TextField id="outlined-basic" label="Email" variant="outlined" type={'email'} style={{width: '100%'}} 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        required
        error={emailError}
        helperText={emailError && "Please enter a valid email address"}
        />
        </div>
        <div className=''>
        <TextField id="outlined-basic" label="Password" variant="outlined" type={'password'} style={{width: '100%'}}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        required
        error={passwordError}
        helperText={
          passwordError &&
          "Please enter a password with at least 8 characters"
        }
        />
        </div>
        <div className='py-5'>
        <TextField id="outlined-basic" label="Confirm password" variant="outlined" type={'password'} style={{width: '100%'}}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
       
        required
        error={confirmPasswordError}
        helperText={
          confirmPasswordError &&
          "Please confirm your password with the same value"
        }
        />
        </div>
      </div>
      
              
      <div className='mt-3 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
        <button className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 'style={{width: '100%'}} onClick={handleSubmit}>Register</button>
       </div>
    
      
          <div className='border-t-2 mt-4'/>
          <div className="text-sm pt-3 text-center">
                <span>Already have an account? </span>
                <button className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link to="/"> Login</Link>
                </button>
              </div>
              
    </div>
    </div>
    </div>
    )
  }