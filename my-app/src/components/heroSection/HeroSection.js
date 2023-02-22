import React from 'react';
import { Button } from '../button/Button';
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='video' src='/videos/video-3.mp4' autoPlay loop muted/>
      <h1>Proletarier aller Länder vereinigt Euch!</h1>
      <p>What are you waiting for?</p>

    </div>
  )
}

export default HeroSection;
