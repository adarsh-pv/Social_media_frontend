/* eslint-disable prettier/prettier */
import React from 'react';
import FollowersCard from '../../Common/FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../../Common/LogoSearch/LogoSearch';
import './ProfileLeft.css';
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
