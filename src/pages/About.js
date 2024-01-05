import React from 'react';
import '../css/styles.css';
import AboutPage from '../media/AboutPage';

const Home = () => {
  return (
    <div style={{marginLeft: '16%', marginRight: '16%'}}>

      <div>
        <h3 className='text'>About</h3>
      </div>

      <AboutPage/>
      
    </div>
  );
};

export default Home;