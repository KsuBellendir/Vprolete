import React, {useState} from 'react';
import CatItem from './CatItem';
import './Cat.css';


function Cat() {

    return (
      <div className='cards'>
        <h1>Никакой политики. Только хвостатые</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CatItem
                src='videos/catvideo-1.mp4'
                text='When you feel like a grain of sand, look at what beauty thousands of such grains of sand can create'
                label='Delicious'
                path='/player'
                url='/videos/catvideo-1.mp4'
              />
              <CatItem
                src='videos/catvideo-2.mp4'
                text='Acute social articles and publications'
                label='Nature'
                path='/player'
                url='/videos/catvideo-2.mp4'
              />
            </ul>
            <ul className='cards__items'>
              <CatItem
                src='videos/catvideo-3.mp4'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/player'
                url='/videos/catvideo-3.mp4'
              />
              <CatItem
                src='videos/catvideo-4.mp4'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/player'
                url='/videos/catvideo-4.mp4'
              />
              <CatItem
                src='videos/catvideo-5.mp4'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='World'
                path='/player'
                url='/videos/catvideo-5.mp4'
              />
              <CatItem
                src='videos/catvideo-6.mp4'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='World'
                path='/player'
                url='/videos/catvideo-6.mp4'
              />
              <CatItem
                src='videos/catvideo-7.mp4'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='World'
                path='/player'
                url='/videos/catvideo-7.mp4'
              />
              <CatItem
                src='videos/catvideo-8.mp4'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='World'
                path='/player'
                url='/videos/catvideo-8.mp4'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cat;
