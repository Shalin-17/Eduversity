import React, { useRef } from 'react'
import './Video.css'
import video from "../../assets/video.mp4"

const Video = ({playState, setPlayState}) => {

  const player  = useRef(null);
  
  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlayState(false);
      
    }
  }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted={!playState} controls></video>
    </div>
  )
}

export default Video
