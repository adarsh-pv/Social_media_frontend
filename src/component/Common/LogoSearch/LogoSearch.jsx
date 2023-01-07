/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Logo from '../../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';
import './LogoSearch.css';
import { searchengine } from '../../../Apirequests/authapis';
import FollowersCard from '../FollowersCard/FollowersCard';
import { useDispatch } from 'react-redux';
import { setPeoples } from '../../../Store/usersSlice';

const LogoSearch = () => {
  const dispatch =useDispatch()
  const [search,setSearch] = useState(null)
  const [getdata,setGetdata] = useState([])
  const handleSubmit = async ()=>{
    <FollowersCard/>
    const response = await searchengine(search)
    setGetdata(response.data)
    dispatch(setPeoples(response.data))
  }
  console.log(getdata,"getdatassssss")
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="#Explore" />
        <div className="s-icon">
          <span onClick={handleSubmit}><UilSearch /></span>

        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
