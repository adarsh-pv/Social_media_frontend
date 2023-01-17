/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import unknownuser from '../../../img/unknown.png';
import { Card } from '@mantine/core';
import { follow } from '../../../Apirequests/authapis';
import {  useNavigate } from 'react-router-dom';

// navigator
const Followuser = ({user,following}) => {
  const [followbutton, setButton] = useState('');
    const follows = async (id) => {
      const {data} = await follow(id);
      setButton(!followbutton)
    }
useEffect(()=>{
  const res = following.includes(user._id)
  setButton(res)
},[following])
const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 250, maxHeight: 230 }} className="card">

          <CardActionArea>

          <CardMedia
          component="img"
          height="100"
          onClick={() =>navigate(`/profile/${user._id}`)}
          src={ user.profileimage ? user.profileimage : unknownuser}
          alt="green iguana"
          />
            <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {user?.name}
          </Typography>
          {followbutton ? (
            <button
            className="button fc-button"
            onClick={() => follows(user._id)}>
            unfollow
            </button>
            ) : (
            <button
            className="button fc-button"
            onClick={() => { follows(user._id) }}>
       follow
            </button>
            )}
            </CardContent>
            </CardActionArea>
          
            </Card>
  );
};

export default Followuser;
