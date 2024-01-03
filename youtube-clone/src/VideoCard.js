import React from 'react';
import { Avatar } from '@mui/material';

function VideoCard({image, title, channel, timestamp, channelImage, views }) {
  return (
    <div className='videoCard'>
        <img src={image} alt=""/>
        <div className='videoCard__info'>
        <Avatar className="videoCard_avatar" 
        alt={channel} 
        src={channelImage}

        />
        <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views} . {timestamp}
             </p>
        </div>
        </div>

    </div>
  )
}

export default VideoCard