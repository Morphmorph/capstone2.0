import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { Link, useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Personal () {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors }, watch} = useForm();
  const navigate = useNavigate();


  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  
  
  const onSubmit = async (data, event) => {
    event.preventDefault(); 
    console.log(data);
    setIsLoading(true); // Set isLoading to true when form is submitted
    try {
      // Perform form submission logic here
      console.log(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 5000));
      setIsRedirect(true);
       // Set redirect state to true after form submission is successful
       navigate('/confirmemail');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after form submission is completed
    }
  };
  
 
  
  
  return(

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex w-full h-screen esm:pt-10" >
    <div className="w-full flex items-center justify-center bg-white-100 esm:px-0 px-2">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft w-5/6  bg-white
    '>
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 absolute'>Personal information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
      <div className=' w-1/2 esm:px-0 px-5'>
      
      
        
      <div className='py-5 pt-10'>
          <TextField 
            id="fname" 
            label="Full name" 
            variant="outlined" 
            fullWidth
            name="fname"
            {...register('fname', {
              required: 'This field is required',
              maxLength: {
                value: 30,
                message: 'Name exceeded the limit!',
              },
              minLength: {
                value: 2,
                message: 'Name should be greater than one ',
              },
              pattern: {
                value: /^[^0-9]*$/,
                message: 'Name should not have digits!', // Custom error message for invalid email format
              },
             
            })}
            error={!!errors.fname} // Set error state based on validation result
            helperText={errors.fname ? errors.fname.message : null} // Display validation error message
           

        /> 
       
        </div>
       
        <TextField 
            id="age" 
            label="Age" 
            variant="outlined" 
            fullWidth
            name="age"
            {...register('age', {
              required: 'This field is required',
              maxLength: {
                value: 100,
                message: 'Age exceeded the limit!',
              },
              minLength: {
                value: 18,
                message: 'Minors is prohibited!',
              },
              pattern: {
                value: /^\d*$/,
                message: 'Numbers only!', // Custom error message for invalid email format
              },
             
            })}
            error={!!errors.age} // Set error state based on validation result
            helperText={errors.age ? errors.age.message : null} // Display validation error message
           

        /> 
       
        
       
        
      </div>
      </div>
      <div className='mt-3 gap-y-4 text-center w-1/2 esm:px-0 px-5 absolute bottom-0 right-10 flex justify-end p-5'>
        <button className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md w-1/3' 
        type="submit"
        disabled={isLoading}>{isLoading ? 'Loading...' : 'Next  '}</button>
       </div>

       {isLoading && (
      <div className=" rounded-2xl absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center bg-white opacity-75 z-10">
      <PropagateLoader color="black" loading={true} size={15}/> 
    </div>
      )}
      
        
    </div>
    </div>
    </div>
    </form>
    )
  }

