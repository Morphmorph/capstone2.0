import React,{ useState,useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { PropagateLoader} from "react-spinners";
import Appbar from './Appbar'
import UserContext from '../api/context/context';
import { axiosRequest } from '../api/api/axios';
import { useForm } from 'react-hook-form'
// import React, { useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const { user } = React.useContext(UserContext);
  const [profile,setProfile] = useState([])
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch} = useForm();
  const {setUser} = React.useContext(UserContext)
console.log(user)
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axiosRequest.get(`auth/web/profile/${user.id}`, {
        headers: {
          'Authorization': `JWT ${user.access}`,
        }
      })
      console.log(response.data);
      
      //  console.log(profile)

      setProfile(response.data)
      if (user.usertype === "Student") {
        if (response.data[0].userdetails.length == 0) {
          navigate('/personal');
          
        } else if (response.data[0].guardian.length == 0) {
          navigate('/Sguardian');
        } else if (response.data[0].educationbg.length == 0) {
          navigate('/Seducation');
        } else {
          navigate('/home');
        }
      } else if (user.usertype === "Employer") {
        if (response.data[0].userdetails.length === 0 ) {
          navigate('/personal');
        } else {
          navigate('/home');
        }
      }
    } catch (err) {
      navigate('/');
      // console.log(err);
    }
  };

  fetchData();
}, [user.id]);

const onSubmit = async (data, event) => {
  event.preventDefault(); 
  console.log(data);
  setIsLoading(true); // Set isLoading to true when form is submitted
  try {
    // Perform form submission logic here
    await new Promise(resolve => setTimeout(resolve, 5000));
    setIsRedirect(true);
     // Set redirect state to true after form submission is successful
     setUser({usertype:null,id:null,email:null,access:null})
     navigate('/');
  } catch (error) {
    // console.error(error.status);
  } finally {
    setIsLoading(false); // Set isLoading back to false after form submission is completed
  }
};

 
  return (
    <div className="flex w-full h-screen esm:pt-10 relative" >
    <div className="w-full flex px-10 pb-5 ">
    {profile.map((profile,index)=>(  <div key={index} className=' w-full bg-[#EDF3FF96] rounded-lg'>

        
        <h1 className=' text-3xl p-5'>  {profile.usertype} Profile</h1>
        <div className=" w-full flex items-center justify-center">
     <div  className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft  bg-white
    '> 
    <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Logout</h1>
    <p >Complete your account verification and join our community of trusted users.</p>
   
    <div className=' w-full esm:px-0 px-5 '>

    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='mt-4 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
    <button className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 
    'style={{width: 250}} 
    type="submit"
    disabled={isLoading}>{isLoading ? 'Exiting...' : 'Logout'}</button>
     {isLoading && (
      <div className=" rounded-2xl absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center bg-white opacity-75 z-10">
      <PropagateLoader color="black" loading={true} size={15}/> 
    </div>
      )} 
      </div>
      </form>
  
    
    </div>
    </div>
        </div>))}
        </div>
        </div>
  )
}

export default Home