import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { useNavigate} from 'react-router-dom';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem';


export default function Education () {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors },} = useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  
  
  const handleSelectChange = (event) => {
    
    setValue('yearlvl', event.target.value);
    clearErrors('yearlvl'); 
  };

  const onSubmit = async (data, event) => {
    event.preventDefault(); 
   
    console.log(data);
    setIsLoading(true); // Set isLoading to true when form is submitted
    try {
      // Perform form submission logic here
      console.log(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsRedirect(true);
       // Set redirect state to true after form submission is successful
       navigate('/home');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after form submission is completed
    }
  };
  
 
  
  
  return(

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex w-full eesm:pt-10 sm:pt-20" >
    <div className="w-full flex items-center justify-center bg-white-100 esm:px-0 px-5">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-2 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft esm:w-5/6 w-full bg-white
    '>
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:absolute relative'>Education information</h1>
      
      <div className=" mt-4 py-5 eesm:pt-2 esm:pt-2 sm:pt-10 pt-20 w-full sm:w-auto md:w-auto sm:flex-col md:grid md:grid-cols-2 gap-5 justify-center items-center">
      
      <div className='pb-5 w-full'>
          <TextField 
            id="sname" 
            label="School name" 
            variant="outlined" 
            fullWidth
            name="sname"
            {...register('sname', {
              required: 'This field is required',
              maxLength: {
                value: 60,
                message: 'School name exceeded the limit!',
              },
              minLength: {
                value: 3,
                message: 'School name should be greater than 3 (Abbreviation or full) ',
              },
              pattern: {
                value: /^[^0-9]*$/,
                message: 'Please provide a valid school name (letters only)', // Custom error message for invalid email format
              },
             
            })}
            error={!!errors.sname} // Set error state based on validation result
            helperText={errors.sname ? errors.sname.message : null} // Display validation error message
          

        /> 
       
        </div>
      
      <div className='pb-5 w-full'>
      <TextField 
            id="course" 
            label="Course" 
            variant="outlined" 
            fullWidth
            name="course"
            {...register('course', {
              required: 'This field is required',
              maxLength: {
                value: 60,
                message: 'Exceeded the limit!',
              },
              minLength: {
                value: 3,
                message: 'Course letters should be greater than 3 (Abbreviation or full) ',
              },
             
            })}
            error={!!errors.course} // Set error state based on validation result
            helperText={errors.course ? errors.course.message : null} // Display validation error message
          

        /> 
       

        </div>
        <div className='pb-5 w-full'>
        <TextField
        id="yearlvl"
        label="Year & level"
        name="yearlvl"
        select 
        fullWidth
        {...register('yearlvl', {
          required: 'This field is required!',
        })}
        error={!!errors.yearlvl} // Set error state based on validation result
        helperText={errors.yearlvl && errors.yearlvl.message} // Display validation error message
        onChange={handleSelectChange}
      >
        <MenuItem value="1">1ST YEAR COLLEGE</MenuItem>
        <MenuItem value="2">2ND YEAR COLLEGE</MenuItem>
        <MenuItem value="3">3RD YEAR COLLEGE</MenuItem>
        <MenuItem value="4">4TH YEAR COLLEGE</MenuItem>
        <MenuItem value="5">5TH YEAR COLLEGE</MenuItem>
      </TextField>
       

        </div>
        <div className='pb-5 w-full'>
        <TextField
        id="street"
        label="Street"
        variant="outlined"
        fullWidth
        name="street"
        {...register('street',{
          required: 'School address is required',
          maxLength: {
            value: 20,
            message: 'Exceeded the limit!',
          },
          pattern: {
            value: /^[^0-9]*$/,
            message: 'Please provide a valid street (letters only)', // Custom error message for invalid email format
          },
        })}
        error={!!errors.street}
        helperText={errors.street ? errors.street.message : null}
      />
      </div>
      <div className='pb-5 w-full'>
      <TextField
        id="city"
        label="City"
        variant="outlined"
        fullWidth
        name="city"
        {...register('city',{
          required: 'School address is required',
          maxLength: {
            value: 30,
            message: 'Exceeded the limit!',
          },
          pattern: {
            value: /^[^0-9]*$/,
            message: 'Please provide a valid city (letters only)', // Custom error message for invalid email format
          },
        })}
        error={!!errors.city}
        helperText={errors.city ? errors.city.message : null}
      />
      </div>
      <div className='pb-5 w-full'>
      <TextField
        id="province"
        label="Province"
        variant="outlined"
        fullWidth
        name="province"
        {...register('province',{
          required: 'School address is required',
          maxLength: {
            value: 30,
            message: 'Exceeded the limit!',
          },
          pattern: {
            value: /^[^0-9]*$/,
            message: 'Please provide a valid province (letters only)', // Custom error message for invalid email format
          },
        })}
        error={!!errors.province}
        helperText={errors.province ? errors.province.message : null}
      />
      </div>
      <div className='pb-5 w-full'>
      <TextField
        id="zipcode"
        label="Zipcode"
        variant="outlined"
        fullWidth
        name="zipcode"
        {...register('zipcode',{
          required: 'School address is required',
          pattern: {
            value: /^[0-9]{4}$/,
            message: 'Please provide a valid zipcode (digits only)',
          },
        })}
        error={!!errors.zipcode}
        helperText={errors.zipcode ? errors.zipcode.message : null}
      />
       
       
        </div>
      
      </div>
      <div className=" pt-5">
      <div className='gap-y-4 text-center w-1/6 esm:px-0 px-5 absolute bottom-0 esm:right-5 right-0 flex justify-end sm:p-4 p-4'>
  <button className='active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md w-1/2 flex items-center justify-center' 
    type="submit"
    disabled={isLoading}
    style={{ width: '100%' }}>
    {isLoading ? 'Loading...' : 'Done'}
  </button>
</div>
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

