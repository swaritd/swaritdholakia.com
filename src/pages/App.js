import React, { useState } from 'react';
import '../css/App.css';
import '../css/styles.css';
import headshot from '../assets/headshot.jpeg';
import twittericon from '../assets/twittericon.png';
import emailicon from '../assets/emailicon.png';
import linkedinicon from '../assets/linkedinicon.png';
import Writings from './Writings';
import Reads from './Reads';
import Values from './Values';
import Work from './Work';
import Notes from './Notes';
import ClickableText from '../components/ClickableText';

function App() {

  const [selectedComponent, setSelectedComponent] = useState('ComponentOne');
  const handleMenuClick = (componentName) => {
    setSelectedComponent(componentName);
  };
  
  return (

    <div className="container">

      <div className="left">
        <div className='leftbox'>

          <img src={headshot} alt='headshot' style={{ width: '150px', height: 'auto' }}></img>

          <h2 className='text'>Swarit Dholakia</h2>

          <ul>
            <ClickableText text="Writings" onClick={() => handleMenuClick('Writings')} />
          </ul>

          <ul>
            <ClickableText text="Reads" onClick={() => handleMenuClick('Reads')} />
          </ul>

          <ul>
            <ClickableText text="Values" onClick={() => handleMenuClick('Values')} />
          </ul>

          <ul>
            <ClickableText text="Work" onClick={() => handleMenuClick('Work')} />
          </ul>

          <ul>
            <ClickableText text="Notes" onClick={() => handleMenuClick('Notes')} />
          </ul>

          <hr className="horizontal-line" />

          <a href="https://twitter.com/swaritdholakia">
          <img src={twittericon} alt='twitterlogo' style={{ width: '25px', height: 'auto' }}></img>
          </a>
          {' '}
          <a href="mailto:dholakia.swarit@gmail.com">
          <img src={emailicon} alt='twitterlogo' style={{ width: '25px', height: 'auto' }}></img>
          </a>
          {' '}
          <a href="https://linkedin.com/in/swaritdholakia/">
          <img src={linkedinicon} alt='linkedinicon' style={{ width: '25px', height: 'auto' }}></img>
          </a>

        </div>
      </div>

      {selectedComponent === 'Writings' && <Writings />}
      {selectedComponent === 'Reads' && <Reads />}
      {selectedComponent === 'Values' && <Values />}
      {selectedComponent === 'Work' && <Work />}
      {selectedComponent === 'Notes' && <Notes />}

    </div>

  );
}

export default App;
