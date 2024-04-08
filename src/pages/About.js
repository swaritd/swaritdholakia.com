import React from 'react';
import '../css/styles.css';
import AboutPage from '../media/AboutPage';

const Home = () => {
  return (
    // change padding for mobile below
    <div style={{marginLeft: '14%', marginRight: '14%'}}>

      <div>
        <h3 className='text'>About</h3>
      </div>

      <AboutPage/>
      
    </div>
  );
};

export default Home;
