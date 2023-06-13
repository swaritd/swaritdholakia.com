import React from 'react';
import '../css/styles.css';
import ValuesPage from '../media/ValuesPage';

const Reads = () => {
  return (
    <div className="right">

        <div className='rightbox'>
          <h3 className='text'>Values</h3>
        </div>

        <ValuesPage/>

      </div>
  );
};

export default Reads;