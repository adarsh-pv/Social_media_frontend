/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import './FollowersCard.css';
// import { Followers } from '../../../Data/FollworsData';
import { useEffect } from 'react';
import { fetchUsers } from '../../../Apirequests/authapis';
import { useState } from 'react';
import User from '../User/User';
// import unknownuser from '../../../img/unknown.png';
// import ProfileCard from '../../Profileparts/ProfileCard/ProfileCard';
const FollowersCard = () => {
  // const [profile,setProfile] = useState('')
// const userProfiles =async (body) =>{
//  const profiles = await userProfile(body)
//  setProfile(profiles)
// }
const [followbutton, setButton] = useState(false);
// const follows = async (id) => {
//   const response = await follow(id);
//   setButton(response.data);
//   console.log(response, 'following');
// };
// useEffect(() => {
//   follows();
// }, []);
// console.log(profile,"pop")
  console.log(followbutton, 'YYYY');
  const [users, setUser] = useState([]);
  const fetchUser = async () => {
    const response = await fetchUsers();
    console.log(response, 'totalusers');
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(users, 'jjjjjj');

  return (
    <div className="FollowersCard">
      <h3>following suggetions
      </h3>
      {/* <user /> */}

      {users.map((user) => {
        // return (
         return <User key={user._id} user={user} />  
        // );
      })}
    </div>
  );
};

export default FollowersCard;
