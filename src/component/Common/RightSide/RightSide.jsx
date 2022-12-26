/* eslint-disable prettier/prettier */
import React from 'react';
import './RightSide.css';
import Home from '../../../img/home.png'
import Noti from '../../../img/noti.png';
import Comment from '../../../img/comment.png';
import { UilUser } from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';
import { useNavigate } from 'react-router-dom';
// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";
const RightSide = () => {
  const navigate = useNavigate('')
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilUser
         onClick={()=>navigate(`/allusers`)}/>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />

      <button className="button r-button">Share</button>
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />   */}
    </div>
  );
};

export default RightSide;
