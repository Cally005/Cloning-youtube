import React from 'react'
import VideoCard from "./VideoCard";
import "./Recommendedvidoes.css"

function Recommendedvidoes () {
  return (
    <div className='recommendedvideos'>
    <h2>Recommended</h2>
        <div className='recommendedvideos__videos'>
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />

        </div>
     </div>
  )
}

export default Recommendedvidoes 