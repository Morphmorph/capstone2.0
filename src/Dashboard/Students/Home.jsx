import React from 'react';
import compImage from '../../Images/profile2.png';
import cardImage from '../../Images/bg3.jpg';
import {RiUserLocationLine, RiUser3Line, RiBuilding2Line} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function Home(props) {
  return (
    <div className='border-2 justify-center items-center bg-cover bg-center absolute px-2 py-2 rounded-lg flex flex-col'style={{ backgroundImage: `url(${cardImage})`,display : props.hide }}>
      <div className="bg-cover inset-0 flex " style={{ backgroundImage: `url(${compImage})`, 
        margin: '2%', 
        width: 100, 
        height: 100, 
        borderRadius: 50,
        alignSelf: 'center',
        
        }}>
        </div>
        <div className=' h-40 w-72 border-grey border-2 rounded-lg bg-[#F7FAFF66] '>
        <div className='flex-col px-2 '>
          <p className=' border-b-2 border-gray-500 text-lg'> <RiUser3Line className="inline-block mb-1 text-blue-500" /> Back-end developer</p>
          <p className=''> <RiBuilding2Line className="inline-block mb-1 text-blue-500" /> BeSagunsa Inc.</p>
          <p className=''> <RiUserLocationLine className="inline-block mb-1 text-blue-500" /> Imbatug, Baungon, Bukidnon  </p>
          <p className=''> <MdWorkOutline className="inline-block mb-1 text-blue-500" /> Remote</p>
          <p className=''> <AiOutlineClockCircle className="inline-block mb-1 text-blue-500" /> 12 hours ago</p>
          </div>
         
          </div>
          <div className=' flex justify-center'>
          <button className=' w-auto active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white mt-5 px-20 py-2 rounded-md 'type="submit">View</button>
      
          </div>
          </div>
      
   
  );
}