/* eslint-disable prettier/prettier */
import React from 'react';
import './RightSide.css';
import Home from '../../../img/home.png'

import Comment from '../../../img/comment.png';
import { UilUser } from '@iconscout/react-unicons';
import { UilBookmark } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../../Profileparts/ProfileCard/ProfileCard';

const RightSide = () => {
  const navigate = useNavigate('')
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" onClick={()=>navigate('/home')}/>
        <UilUser
         onClick={()=>navigate(`/allusers`)}/>
        <UilBookmark
         onClick={()=>navigate(`/savedpost`)}/>
        <img src={Comment} alt=""  onClick={()=>navigate('/chat')}/>
      </div>
      {/* <TrendCard /> */}
      <ProfileCard location="home"/>


      {/* <button className="button r-button">Share</button> */}
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />   */}
    </div>
  );
};

export default RightSide;
