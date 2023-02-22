import React from 'react'
import ReactPlayer from 'react-player';
import './audio.css'

function Audio() {
  return (
    <ul className='wrapper-audio'>
    <ReactPlayer
      className='track'
      url='/audio/audio-1.mp3'
      controls={true}
      />
    <ReactPlayer
      url='/audio/audio-2.mp3'
      controls={true}
      />
    <ReactPlayer
      url='/audio/audio-3.mp3'
      controls={true}
      />
    <ReactPlayer
      url='/audio/audio-4.mp3'
      controls={true}
      />
    <ReactPlayer
      url='/audio/audio-5.mp3'
      controls={true}
      />
    <ReactPlayer
      url='/audio/audio-6.mp3'
      controls={true}
      />
    <ReactPlayer
      url='/audio/audio-7.mp3'
      controls={true}
      />
          <ReactPlayer
      url='/audio/audio-8.mp3'
      controls={true}
      />
    </ul>
  )
}

export default Audio;
