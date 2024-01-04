import React from 'react';
import '../css/styles.css';
import WritingsPage from '../media/WritingsPage';

const Writings = () => {
  return (
    <div style={{maxWidth: '50%'}}>

      <div>
        <h3 className='text'>Writings</h3>
      </div>

      <WritingsPage/>

    </div>
  );
};

export default Writings;