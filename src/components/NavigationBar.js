import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.jpeg';

const NavigationBar = () => {
  return (
    <nav style={{ paddingBottom: '5px', paddingTop: '30px' }}>

      <img src={headshot} alt='headshot' style={{ width: '135px', height: 'auto', marginBottom: '-12px' }}></img>
      <h1 className='text' style={{marginBottom: '-2px'}}>Swarit Dholakia</h1>
        
      <ul style={{ listStyleType: 'none', marginTop: '10px', padding: 0 }}>

        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/">About</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/writings">Writings</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '10px' }}>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;