/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { InputBase, Paper } from '@mantine/core';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearchresult } from '../../../Store/usersSlice';
import { searchdata } from '../../../Apirequests/adminapis';
const Searchbar = ({select}) => {
  console.log(select,"location")
  const dispatch =useDispatch()
    const[search,setSearch] = useState(null)
    console.log(search)
    const handleSubmit = async()=>{
        const response = await  searchdata(search) 
        console.log(response,"search")
    dispatch(setSearchresult(response.data))
    }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        onChange={(e)=>setSearch(e.target.value)}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" onClick={handleSubmit} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
};
export default Searchbar;
