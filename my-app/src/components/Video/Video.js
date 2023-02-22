import React from 'react';
import VideoItem from './VideoItem';
import './Video.css';

function Video() {
    return (
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <VideoItem
                src='videos/video-4.mp4'
                text='When you feel like a grain of sand, look at what beauty thousands of such grains of sand can create'
                label='Delicious'
                path='/player'
                url='/videos/video-4.mp4'
              />
              <VideoItem
                src='videos/video-5.mp4'
                text='Acute social articles and publications'
                label='Nature'
                path='/player'
                url='/videos/video-5.mp4'

              />
            </ul>
            <ul className='cards__items'>
              <VideoItem
                src='videos/video-6.mp4'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/player'
                url='/videos/video-6.mp4'
              />
              <VideoItem
                src='videos/video-1.mp4'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/player'
                url='/videos/video-1.mp4'
              />
              <VideoItem
                src='videos/video-2.mp4'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='World'
                path='/player'
                url='/videos/video-2.mp4'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Video;
