/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
;
import { Box, Button, Card, Center, Flex, Tabs } from '@mantine/core';
// import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';  
import { red } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import { display } from '@mui/system';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import { fetchusers, follow, followingusers, follwersusers } from '../../../Apirequests/authapis';

import './alluser.css'
import Followuser from '../Followuser/Followuser';
 
const AllUsers = () => {
  const [allusers,setAlluser] = useState([])

  const fetchallusers = async () =>{
    const response = await fetchusers()
   if(response.data)  setAlluser(response.data)
  }
  const following = async () =>{
    const response = await followingusers()
    console.log(response.data[0]?.followinguser,"following users listed here")
    setAlluser(response.data[0]?.followinguser)
  }
 const followers = async () =>{
  const response = await follwersusers()
  console.log(response.data[0]?.followeruser,"followers usrs listed here")
  setAlluser(response.data[0]?.followeruser)
 }
 useEffect(()=>{
  fetchallusers()
  // followers()
 },[])
 console.log(allusers,"followeingsssssssss")

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
         return <Followuser key={user._id} user={user} />
       })}   
       </Flex>
  </div>;
};

export default AllUsers;
