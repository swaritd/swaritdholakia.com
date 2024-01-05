import React from 'react';

import twittericon from '../assets/twittericon.png';
import emailicon from '../assets/emailicon.png';
import linkedinicon from '../assets/linkedinicon.png';

const SocialLinks = () => {

  return (
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
  );
};

export default SocialLinks;
