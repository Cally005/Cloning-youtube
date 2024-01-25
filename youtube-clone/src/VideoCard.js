import React from 'react';
import  './VideoCard.css'
// import ReactPlayer from 'react-player';
import { Avatar } from '@mui/material';

function VideoCard({url, title, channel, timestamp, channelImage, views }) {
  return (
    <div className='videoCard'>
        <video
         
         src={url} alt=""/>
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


// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';

// const VideoList = () => {
//   const [videos, setVideos] = useState([
//     {
//       id: 1,
//       title: 'Video 1',
//       url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
//       subtitle: 'https://www.example.com/subtitles/subtitle1.vtt',
//     },
//     {
//       id: 2,
//       title: 'Video 2',
//       url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
//       subtitle: 'https://www.example.com/subtitles/subtitle2.vtt',
//     },
//     // Add more videos as needed
//   ]);

//   const [selectedVideo, setSelectedVideo] = useState(videos[0]);
//   const [brightness, setBrightness] = useState(100);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const selectVideo = (video) => {
//     setSelectedVideo(video);
//     setLoading(true);
//   };

//   const handleBrightnessChange = (value) => {
//     setBrightness(value);
//   };

//   const handlePlaybackRateChange = (rate) => {
//     setPlaybackRate(rate);
//   };

//   const handleVideoReady = () => {
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div>
//         {loading && <p>Loading...</p>}
//         <ReactPlayer
//           url={selectedVideo.url}
//           playing
//           controls
//           width="100%"
//           height="auto"
//           style={{ filter: `brightness(${brightness}%)` }}
//           playbackRate={playbackRate}
//           onReady={handleVideoReady}
//           config={{
//             file: {
//               tracks: [
//                 {
//                   kind: 'subtitles',
//                   src: selectedVideo.subtitle,
//                   srcLang: 'en',
//                   default: true,
//                 },
//               ],
//             },
//           }}
//         />
//       </div>
//       <div>
//         <label htmlFor="brightness">Brightness:</label>
//         <input
//           type="range"
//           id="brightness"
//           name="brightness"
//           min="0"
//           max="200"
//           value={brightness}
//           onChange={(e) => handleBrightnessChange(e.target.value)}
//         />
//         <span>{brightness}%</span>
//       </div>
//       <div>
//         <label htmlFor="playbackRate">Playback Rate:</label>
//         <input
//           type="range"
//           id="playbackRate"
//           name="playbackRate"
//           min="0.5"
//           max="2"
//           step="0.1"
//           value={playbackRate}
//           onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
//         />
//         <span>{playbackRate}x</span>
//       </div>
//       <ul>
//         {videos.map((video) => (
//           <li key={video.id} onClick={() => selectVideo(video)}>
//             {video.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>YouTube-like App with Subtitles, Brightness Control, Playback Controls, and Loading State</h1>
//       <VideoList />
//     </div>
//   );
// };

// export default App;
