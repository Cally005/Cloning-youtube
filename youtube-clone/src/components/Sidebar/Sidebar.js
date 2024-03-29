import React from 'react'
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import "./_sidebar.scss";

const Sidebar= ({sidebar, handleToggleSidebar}) => {



  return (
    <nav className={sidebar?"sidebar open": 'sidebar'}
    onClick={()=>handleToggleSidebar(false)}
    >
    
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow  Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
    <hr />
    <SidebarRow Icon={VideoLibraryIcon} title="Libary" />
    <SidebarRow  Icon={HistoryIcon} title="History"/>
    <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
    <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
    <SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
    <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
    <hr/>
    </nav>

  )
}

export default Sidebar;