/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModel from '../Profilemodel/profilemodel';
import AllUsers from '../Allusers/AllUsers';
import { useSelector } from 'react-redux';
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const {USER} = useSelector((state) =>state.userReducer)
  console.log(USER,"kkk>>>>>>>>>>>>>>k")
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)}/>
        <ProfileModel modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>D.O.B</b>
        </span>
        <span>{USER.DOB}</span>
      </div>

      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span> {USER.livesin}</span>
      </div>
      <div className="Info">
        <span>
          <b>Work At </b>
        </span>
        <span> {USER.works}</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard
