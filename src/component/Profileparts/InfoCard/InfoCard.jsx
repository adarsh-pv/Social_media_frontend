/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModel from '../Profilemodel/profilemodel';
import AllUsers from '../Allusers/AllUsers';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const InfoCard = () => {
  const Navigate = useNavigate()
  const [modalOpened, setModalOpened] = useState(false);
  const {USER} = useSelector((state) =>state.userReducer)

  const logount = () =>{
    const cookies = new Cookies()
    cookies.remove('token')
    Navigate('/login')
  } 
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
       {USER.DOB? <span>{USER.DOB}</span> : <span>-- -- --</span>}
      </div>

      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        {USER.livesin?<span> {USER.livesin}</span>:<span>------</span>}
      </div>
      <div className="Info">
        <span>
          <b>Work At </b>
        </span>
       {USER.work ? <span> {USER.works}</span> : <span>------</span>}
      </div>

      <button className="button logout-button" onClick={()=>logount}>Logout</button>
    </div>
  );
};

export default InfoCard
