import React from 'react';
import '../css/styles.css';
import WritingsPage from '../media/WritingsPage';

const Writings = () => {
  return (
    <div style={{marginLeft: '10%', marginRight: '10%'}}>

      <div>
        <h3 className='text'>Writings</h3>
      </div>

      <WritingsPage/>

    </div>
  );
};

export default Writings;