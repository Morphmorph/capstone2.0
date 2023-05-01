import React from 'react'
import backgroundImage from '../../Images/bg2.jpg';

export default function Activity(props) {
  return (
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`,display : props.hide }}>
    {/* <Appbar /> */}
    
    <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
    <div >

    <div className='justify-center text-center  w-full esm:px-0 px-5'>
    Activity log
  
    </div>
    
    </div>
    </div>
    </div>
  )
}
