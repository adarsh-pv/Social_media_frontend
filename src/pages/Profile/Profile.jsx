/* eslint-disable prettier/prettier */
// import React from 'react'
// import PostSide from '../../components/PostSide/PostSide'
// import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
// import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
// import RightSide from '../../components/RightSide/RightSide'
// import './Profile.css'
// const Profile = () => {
//   return (
//     <div className="Profile">
//         <ProfileLeft/>

//         <div className="Profile-center">
//             <ProfileCard/>
//             <PostSide/>
//         </div>

//         <RightSide/>
//     </div>
//   )
// }

// export default Profile
import React from 'react';
import PostSide from '../../component/PostSide/PostSide';
import ProfileCard from '../../component/ProfileCard/ProfileCard';
import ProfileLeft from '../../component/ProfileLeft/ProfileLeft';
import RightSide from '../../component/RightSide/RightSide';
import './Profile.css';
const Profile = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="Profile">
        <ProfileLeft />
        <div className="Profile-center">
          <ProfileCard />
          <PostSide />
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Profile;
