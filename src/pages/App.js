import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import '../css/App.css';
import '../css/styles.css';

import Writings from './Writings';
import Work from './Work';
import Home from './About';

import SocialLinks from '../components/SocialLinks';

function App() {

  return (

    <Router>
      <div className="App">
        <NavigationBar />
        <hr className="horizontal-line" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/writings" element={<Writings/>} />
          <Route path="/work" element={<Work/>} />
        </Routes>
      </div>

      <hr className="horizontal-line" style={{paddingBottom: '5px'}} />

      <SocialLinks />

    </Router>
    

  );
}

export default App;
