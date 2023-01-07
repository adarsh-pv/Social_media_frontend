/* eslint-disable prettier/prettier */
import React from 'react'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { UilUser } from '@iconscout/react-unicons';


import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { List } from '@mantine/core';
import { ListItem, ListItemText } from '@mui/material';

const AdminLeftSide = ({setSelect}) => {
  return (
       <List sx={{ width: '100%', height:'100vh', maxWidth: 360 }}>
         <ListItem>
        <h2>Admin</h2>
      </ListItem>
     
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <UilUser />
          </Avatar>
        </ListItemAvatar>
        <ListItemText onClick={()=>setSelect('users')} primary="Users" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText onClick={()=> setSelect('posts')} primary="Posts"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
    
  )
}

export default AdminLeftSide