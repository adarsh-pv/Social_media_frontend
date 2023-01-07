/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import unknownuser from '../../../img/unknown.png';
import { Card } from '@mantine/core';
import { follow } from '../../../Apirequests/authapis';
import { Navigate, useNavigate } from 'react-router-dom';
// navigator
const Followuser = ({user}) => {
  const [followbutton, setButton] = useState('');
  const follows = async (id) => {
    const response = await follow(id);
    setButton(response.data);
};
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
          {followbutton.following ? (
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
            </CardContent>
            </CardActionArea>
          
            </Card>
  );
};

export default Followuser;
