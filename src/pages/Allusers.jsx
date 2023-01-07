/* eslint-disable prettier/prettier */
import React from 'react';
import '../App.css';
import AllUsers from '../component/Profileparts/Allusers/AllUsers';
import Profileside from '../component/Profileparts/ProfileSide/profileside';
import RightSide from '../component/Common/RightSide/RightSide';

import './allusers.css'

const Allusers = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="allusers">
        <Profileside/>
      <AllUsers />
      <RightSide/>
      </div>
    </div>
  );
};

export default Allusers;
