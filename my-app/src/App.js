import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Science from './components/pages/Sciens';
import SignUp from './components/pages/Profile/Profile';
import Video from './components/Video/Video';
import Cat from './components/Cat/Cat';
import Photo from './components/Photo/Photo';
import Player from './components/Player/Player';
import Audio from './components/audio/Audio';

function App() {
  return ( 
    <>
    <Router> 
      <NavBar/>
    <Routes>
      <Route path='/'  element={ <Home/> }/>
      <Route path='/science'  element={ <Science/> }/>
      <Route path='/cat'  element={ <Cat/> }/>
      <Route path='/sign-up'  element={ <SignUp/> }/>
      <Route path='/video'  element={ <Video/> }/>
      <Route path='/photo'  element={ <Photo/> }/>
      <Route path='/player'  element={ <Player/> }/>
      <Route path='/music'  element={ <Audio/> }/>
    </Routes>
    </Router>
    </>

  )
}

export default App;
