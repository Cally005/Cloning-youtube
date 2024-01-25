import React from 'react';
import './Header.css';
import VideoCallIcon  from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AppIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar } from '@mui/material';


function Header() {
  return (
    <div className='header'>
        <div className="header__left">
        <MenuIcon />
        <img 
        className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614' 
        alt='' />
        </div> 

        <div className='header__input'>
        <input placeholder="Search" type="text"/>
        <SearchIcon className='header__inputButton' />
        
        </div>
        
       

        <div className="header__icons">
       
        <VideoCallIcon className="header__icon" />
        <AppIcon className="header__icon" />
        <NotificationsIcon className="header__icon"/>
        <Avatar 
          alt='cally'
          src="https://appclick.ng/portal/uploads/student_images/123.jpg?1704035821?1704035821"
          />
    </div>
    </div>
  )
}

export default Header