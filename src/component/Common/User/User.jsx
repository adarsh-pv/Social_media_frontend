/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { follow, userProfile } from '../../../Apirequests/authapis';
import unknownuser from '../../../img/unknown.png';
import { useNavigate, useParams} from 'react-router-dom'
import { createchat } from '../../../Apirequests/chatapis';

// useEffect(()=>{
//     User
// },[])
const User = ({ user ,location }) => {
  const chating = async (id) =>{
    const response =await createchat(id)
    if(response.status === 200 ){
   navigate('/chat')

    }
  }
    const [profile, setProfile] = useState('');
    const [followbutton, setButton] = useState(false);
    const userProfiles = async (body) => {
        const profiles = await userProfile(body);
        setProfile(profiles);
        // <Route
  };
  const navigate = useNavigate()
  const follows = async (id) => {
    const response = await follow(id);
    setButton(response.data);
};
useEffect(() => {
    follows();
    // followbutton
}, []);
console.log(profile,"pop")
  return (
      
      <div className="follower">
      <div>
        {location == 'chat' ? <img
          onClick={() =>chating(user._id)}
          src={user.profileimage ? user.profileimage : unknownuser}
          alt=""
          className="followerImg"
          />: <img
          onClick={() =>navigate(`/profile/${user._id}`)}
          src={user.profileimage ? user.profileimage : unknownuser}
          alt=""
          className="followerImg"
          />}
        <div className="name">
          <span>{user.name} </span>
          <span>{user.email}</span>
        </div>
      </div>

      {location == 'chat' ? '' :followbutton.following ? (
          <button
          className="button fc-button"
          onClick={(e) => {
              e.preventDefault();
              follows(user._id);
            }}>
          follow
        </button>
      ) : (
        <button
          className="button fc-button"
          onClick={(e) => {
            e.preventDefault();
            follows(user._id);
          }}>
          unfollow
        </button>
      )}
      {/* <ProfileCard profile={profile}/> */}
      {/* <button className="button fc-button" onClick={()=>follows(user._id)}>unfollow</button> */}
    </div>
  );
};

export default User;
