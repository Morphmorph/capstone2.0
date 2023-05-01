import React from 'react'
import Appbar from '../Appbar'
import backgroundImage from '../../Images/bg2.jpg';
import Home from './Home';
import Bookmark from './Bookmark';
import Activity from './Activity';
import UserContext from '../../api/context/context';

export default function SDashboard() {
  
  const {page} = React.useContext(UserContext);

  return (
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Appbar/>
    
      <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
      <div>
 <> <Home  hide = {page.active === 'Home' ? null : "none"}/> 
  <Bookmark hide = {page.active === 'Bookmarks' ? null : "none"}/> 
  <Activity hide = {page.active === 'Activity log' ? null : "none"}/> 
  {console.log(page)}

  </>
  

      
      </div>
      </div>
      </div>
  )
}
