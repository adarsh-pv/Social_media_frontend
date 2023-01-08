/* eslint-disable prettier/prettier */
import React from 'react'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { UilUser } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';

import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { List } from '@mantine/core';
import { ListItem, ListItemText } from '@mui/material';

const AdminLeftSide = ({setSelect}) => {
  const Navigate = useNavigate()

  const logout= () =>{
    localStorage.removeItem('adminToken')
    Navigate('/admin')
  }
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
        <ListItemText onClick={()=>setSelect('users')} primary="Users"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText onClick={()=> setSelect('posts')} primary="Posts"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <h4>logout</h4>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Logout" onClick={logout}/>
      </ListItem>
    </List>
    
  )
}

export default AdminLeftSide