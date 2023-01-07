/* eslint-disable prettier/prettier */

import React from 'react';
import PostSide from '../../Feed/PostSide/PostSide';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileLeft from '../ProfileLeft/ProfileLeft';
import RightSide from '../../Common/RightSide/RightSide';
import './Profile.css';
// import { useSelector } from 'react-redux';
const Profile = () => {
 
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
          <ProfileCard location="profile"/>
          <PostSide location='profile'/>
        </div>
        <RightSide />
      </div>  
    </div>
  );
};

export default Profile;
