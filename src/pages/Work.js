import React from 'react';
import '../css/styles.css';
import WorkPage from '../media/WorkPage';

const Work = () => {
  return (
    <div style={{marginLeft: '10%', marginRight: '10%'}}>

      <div>
        <h3 className='text'>Work</h3>
      </div>

      <WorkPage/>

    </div>
  );
};

export default Work;