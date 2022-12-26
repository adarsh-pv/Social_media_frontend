/* eslint-disable prettier/prettier */
import React from 'react';
import FollowersCard from '../../Common/FollowersCard/FollowersCard';
import LogoSearch from '../../Common/LogoSearch/LogoSearch';
import ProfileCard from '../../Profileparts/ProfileCard/ProfileCard';
import './Profileside.css';


const profileside = () => {
  return (
    <div className="Profileside">
      <LogoSearch />
      <ProfileCard/>
      <FollowersCard />
    </div>
  );
};

export default profileside;
