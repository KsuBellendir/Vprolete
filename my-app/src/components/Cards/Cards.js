import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/cat-1.jpg'
                text='Сute and fluffy pies'
                label='Cat'
                path='/cat'
              />
              <CardItem
                src='images/kom-3.jpg'
                text='Acute social articles and publications'
                label='Science'
                path='/science'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-6.jpg'
                text='Music is an intermediary between spiritual and sensual life.'
                label='Mystery'
                path='/music'
              />
              <CardItem
                src='images/kom-21.jpg'
                text='It is always fun with friends'
                label='Frend'
                path='/frend'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Touching moments of life'
                label='Moment'
                path='/photo'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
