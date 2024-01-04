import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import '../css/App.css';
import '../css/styles.css';

import Writings from './Writings';
import Work from './Work';
import Home from './About';

import twittericon from '../assets/twittericon.png';
import emailicon from '../assets/emailicon.png';
import linkedinicon from '../assets/linkedinicon.png';

function App() {

  return (

    <Router>
      <div className="App">
        <NavigationBar />
        <hr className="horizontal-line" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', marginTop: '10px' }}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/writings" element={<Writings/>} />
          <Route path="/work" element={<Work/>} />
        </Routes>
      </div>

      <hr className="horizontal-line" style={{paddingBottom: '10px'}} />

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
        <a href="https://twitter.com/swaritdholakia" target="_blank" rel="noopener noreferrer">
          <img src={twittericon} alt='twitterlogo' style={{ width: '25px', height: 'auto' }}></img>
        </a>
          
        <a href="mailto:dholakia.swarit@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailicon} alt='emailicon' style={{ width: '35px', height: 'auto' }}></img>
        </a>
          
        <a href="https://linkedin.com/in/swaritdholakia/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinicon} alt='linkedinicon' style={{ width: '25px', height: 'auto' }}></img>
        </a>
      </div>

    </Router>
    

  );
}

export default App;
