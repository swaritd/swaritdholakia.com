import React from 'react';
import '../css/styles.css';
import WritingsPage from '../media/WritingsPage';

const Writings = () => {
  return (
    <div style={{maxWidth: '700px'}}>

      <div>
        <h3 className='text'>Writings</h3>
      </div>

      <WritingsPage/>

    </div>
  );
};

export default Writings;