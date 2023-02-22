import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Cat.css';

function CatItem (props) {

  return (
    <>
      <li className='cards__item'>

      <NavLink className='cards__item__link' to={props.path} state={{ caturl: props.url }}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <video autoPlay loop muted
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
              url={props.url}
            />
          </figure>

          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default CatItem;
