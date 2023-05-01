import React from 'react'
import Appbar from '../Appbar'
import backgroundImage from '../../Images/bg2.jpg';
import Home from './Home';


export default function SDashboard() {
  return (
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Appbar/>
    
      <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
      <div>
      <Home/>
      
      </div>
      </div>
      </div>
  )
}
