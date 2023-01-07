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
import { useSelector } from 'react-redux';
// import unknownuser from '../../../img/unknown.png';
// import ProfileCard from '../../Profileparts/ProfileCard/ProfileCard';
const FollowersCard = ({location}) => {

const [followbutton, setButton] = useState(false);
const {peoples} = useSelector((state) =>state.userReducer)


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
     {location == 'chat' ? <h3>search</h3> :<h3>following suggetions
      </h3> }
      {/* <user /> */}

      {peoples?.length== 0 ?users.map((user) => {
        // return (
         return <User key={user._id} user={user} location={location} />  
        // );
      }):peoples.map((users)=>{
        return <User key={users._id} user={users} location={location}/>
      })}
    </div>
  );
};

export default FollowersCard;
