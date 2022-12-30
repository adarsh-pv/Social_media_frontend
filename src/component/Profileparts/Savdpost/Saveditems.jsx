/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
// import { fetchsaveditems } from '../../../Apirequests/postapis';
import RightSide from '../../Common/RightSide/RightSide';
import Post from '../../Feed/Post/Post';
import Postlist from '../../Feed/Postlist/Post';
import PostSide from '../../Feed/PostSide/PostSide';
import ProfileLeft from '../ProfileLeft/ProfileLeft';
import './savedpost.css'

const saveditems = () => {
 
  return (
    <div>
       <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
          <h2 className='heading'>Saved Posts</h2>
        <Postlist post='savedpost'/>

        </div>
        <RightSide />
      </div>
      {/* <h1>hai</h1> */}

    </div>
  );
};

export default saveditems;
