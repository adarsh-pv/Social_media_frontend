/* eslint-disable prettier/prettier */
import { getListSubheaderUtilityClass } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../../../Apirequests/authapis';
import unknownuser from '../../../img/unknown.png'


const Conversation = ({ data, currentUserId,online}) => {
  const [userData, setUserdata] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async ()=>{
        try {
        const {data} = await getUser(userId)
        setUserdata(data)
        console.log(data)
    } catch (error) {
      console.log(error)
    }
    }
    userId&&  getUserData();
  },[]);
  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div> }
          <img
            className="followerImage" 
            style={{width:'50px',height:'50px'}}
            src={userData?.profileimage ? userData?.profileimage : unknownuser}
          />
          <div className="name" style={{ fontSize: '0.8rem' }}>
            <span>{userData?.name}</span>
            <span>{online? "online" : "offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: '85%', border: '0.1px solid #ececec', marginTop: '10px' }} />
    </>
  );
};

export default Conversation;
