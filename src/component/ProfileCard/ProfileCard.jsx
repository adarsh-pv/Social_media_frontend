/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';
// import '../../App.css'

const ProfilePage = true;
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Cinderella </span>
        <span>Senior Backend Develepor</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,456</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>2</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>

        <hr />
      </div>
      {ProfilePage ? (
        <span>
          <Link to="/profile" className="link">
            My profile
          </Link>
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProfileCard;
