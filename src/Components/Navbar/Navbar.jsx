import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png' 
import notification_icon from '../../assets/notification.png' 
import profile_icon from '../../assets/images.png'
import voice_search from '../../assets/voice-search.png'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=""/>
            <img className='logo' src={logo} alt=""/>
        </div>
        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
                <input type="text" placeholder='Tìm kiếm'/>
                <img src={search_icon} alt=""/>
            </div>
            <div>
                <img src={voice_search} alt=''/>
            </div>
            
        </div>

        <div className='nav-right flex-div'>
            <img className='upload-icon' src={upload_icon} alt=""  />  
            <img className='noti-icon' src={notification_icon} alt=""  />
            <img className='user-icon' src={profile_icon} alt="" />
        </div>
        
    </nav>
  )
}

export default Navbar