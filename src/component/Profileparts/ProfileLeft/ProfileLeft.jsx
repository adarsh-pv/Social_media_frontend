/* eslint-disable prettier/prettier */
import React from 'react';
import FollowersCard from '../../Common/FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../../Common/LogoSearch/LogoSearch';
import './ProfileLeft.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProfileLeft = () => {
 const id = useParams()
  const parms =id.id
  const {userid} = useSelector((state)=>state.authReducer)

  return (
    <div className="ProfileSide">
      <LogoSearch />
     {parms === userid ? <InfoCard /> : ''}
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
