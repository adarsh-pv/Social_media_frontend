/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
;
import { Box,Flex, Tabs } from '@mantine/core'; 

import Tab from '@mui/material/Tab';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchusers, followingusers, follwersusers, getFollowing } from '../../../Apirequests/authapis';

import './alluser.css'
import Followuser from '../Followuser/Followuser';
 
const AllUsers = () => {
  const [allusers,setAlluser] = useState([])
  const [getfollowing,setFollowing] = useState([])
  const fetchallusers = async () =>{
    const response = await fetchusers()
   if(response.data)  setAlluser(response.data)
  }
  const following = async () =>{
    const response = await followingusers()
    setAlluser(response.data[0]?.followinguser)
  }
 const followers = async () =>{
  const response = await follwersusers()
  setAlluser(response.data[0]?.followeruser)
 }
 const myfollowing = async () =>{
  const response = await getFollowing()
  setFollowing(response.data.following)
 }
 useEffect(()=>{
  myfollowing()
  fetchallusers()
  // followers()
 },[])

        const [value, setValue] = useState("one")
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
  return <div>
    <Box  className=''>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className='user'
        defaultValue='one'
      >
        <Tab className='users' value="one"c label="all users" onClick={fetchallusers}/>
        <Tab className='users' value="two" label="Following" onClick={following}/>
        <Tab className='users' value="three" label="Followers" onClick={followers}/>
      </Tabs>
    </Box>
    <Flex gap="lg" wrap="wrap" sx={{marginLeft:"8px"}}>

    {allusers?.map((user) =>{ 
         return <Followuser key={user._id} user={user} following={getfollowing}/>
       })}   
       </Flex>
  </div>;
};

export default AllUsers;
