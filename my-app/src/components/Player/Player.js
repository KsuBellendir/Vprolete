import React from 'react';
import ReactPlayer from 'react-player';
import './Player.css';
import Cat from '../Cat/Cat';
import { useLocation } from 'react-router-dom';


function Player(props) {
    let location = useLocation();
    console.log(location.aboutProps);

  return (
    <div className='box-player'>
      <ReactPlayer
      url={location.state.caturl}
      playing={true}
      loop={true}
      controls={true}

      />
    </div>
  )
}

export default Player;
