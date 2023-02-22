import React from 'react';
import PhotoItem from './PhotoItem';
import './Photo.css';

function Photo() {
    return (
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <PhotoItem
                src='images/cat-1.jpg'
                text='When you feel like a grain of sand, look at what beauty thousands of such grains of sand can create'
                label='Delicious'
              />
              <PhotoItem
                src='images/cat-2.jpg'
                text='Acute social articles and publications'
                label='Nature'

              />
            </ul>
            <ul className='cards__items'>
              <PhotoItem
                src='images/cat-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
              />
              <PhotoItem
                src='images/cat-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
              />
              <PhotoItem
                src='images/cat-5.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='World'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Photo;
