/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useState, useRef,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { number } from 'yup/lib/locale';
import { coverphoto, fetchProfileDetails, logineduser, profilephoto, userProfile } from '../../../Apirequests/authapis';
import Cover from '../../../img/cover.jpg';
import Profile from '../../../img/profileImg.jpg';
import unknownuser from '../../../img/unknown.png'
import nocover from '../../../img/nocover.png'
import toast,{Toaster} from 'react-hot-toast'
import './ProfileCard.css';
import Post from '../../Feed/Post/Post';
import InfoCard from '../InfoCard/InfoCard';
import {  useSelector } from 'react-redux';

const ProfileCard = () => { 
 const [userprofiles,setUsersprofile] = useState('')
 
  console.log(userprofiles,"response")
     const[valid,setValid] = useState(false)
  const [imageSelected, setImageSelected] = useState('');
  const [profileurl, setprofileurl] = useState('');
  const [profileimg,setProfileimg] = useState('')
  const [details,setDetails] = useState({})
  const {id} = useParams()

 
  const {useridw} = useSelector((state)=>state.authReducer)
  const loginuser = async ()=>{
    const response = await logineduser()
    console.log(response,"iiiiiiiiii")
  }
  const usersprofile = async () =>{
    const response = await userProfile(id)
    setUsersprofile(response)
  }
  // const[coverImage,setCoverImage] = useState()
  const ProfileRef = useRef('');
  const CoverRef = useRef('');
  const ProfilePage = true;
  const userid = localStorage.getItem('userid')
useEffect(() => {
  usersprofile() 
  loginuser()
}, [])

  const uploadcoverImage = (e) => {
    e.preventDefault();
    console.log(e.target.files[0], 'sd');
    const formData = new FormData();
    console.log('dddd', imageSelected);
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'Cover_picture');
    axios
      .post('https://api.cloudinary.com/v1_1/dufx7jvrn/image/upload', formData)
      .then((response) => {
        console.log(response, 'imgssss');
        coverphoto(response.data.secure_url);
        if(response.data.type === 'upload'){
          toast.success( "Updated Sucessfully",{
            icon: ' 🎊🎊🎊 ',
          style: {
              width: '250px',
              backgroundColor:'lightyellow',
              fontSize: '15px',
          }
        })
        }
      });
  };
  const uploadImage =async (e) => {
    e.preventDefault();
    console.log(e.target.files[0], 's');
    const formData = new FormData();
    console.log('dddd', imageSelected);
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'Profile picture');
    axios
      .post('https://api.cloudinary.com/v1_1/dufx7jvrn/image/upload', formData)
      .then(async(response) => {
        console.log(response, 'imgssssssssss');
      const profile = await profilephoto(response.data.secure_url);
      setProfileimg(profile)
      if(response.data.type === 'upload'){
        toast.success( "Updated Sucessfully",{
          icon: ' 🎊🎊🎊  ',
        style: {
            width: '250px',
            backgroundColor:'lightyellow',
            fontSize: '15px',
        }
        
      });
  };
})
  }

  return (
    <div className="ProfileCard">
      <Toaster/>
      <div className="ProfileImage">
        <img
          onClick={() => CoverRef.current.click()}
          src={userprofiles.data?.coverimage ? userprofiles.data.coverimage: nocover }
          className="cover"
          alt=""  
        />
        <img onClick={() => ProfileRef.current.click()} src={userprofiles.data?.profileimage ? userprofiles.data.profileimage: unknownuser } alt="" />
      </div>
      <div className="ProfileName">
        <span>{userprofiles.data ? userprofiles.data.name: null} </span>
        <span>{userprofiles.data ? userprofiles.data.workat : null}</span>
        <span>Date of birth: {userprofiles.data ? userprofiles.data.dob : "-- -- --"}</span>
        <Link>{userprofiles.data ? userprofiles.data.githubid : null}</Link>
        <Link>{userprofiles.data ? userprofiles.data.linkedinid : null}</Link>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{userprofiles.data ? userprofiles.data.following.length : null}</span>
            <span>Followings</span>  
          </div>
          <div className="vl"></div>
          <div className="follow">
            {/* console.log() */}
            <span>{userprofiles.data ? userprofiles.data.followers.length : null}</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
              <input
                type="file"
                onChange={uploadcoverImage}
                ref={CoverRef}
                hidden
                name="coverImage"
              />
              <input
                ref={ProfileRef}
                onChange={uploadImage}
                type="file"
                hidden
                name="prfileImage"
              />
            </>
          )}
        </div>

        <hr />
      </div>
      {ProfilePage ? (
        <span>
          <Link to={`/profile/${userid}` }className="link">
            My profile
          </Link>
        </span>
      ) : (
        // <Post location="ProfilePage"/>
        ''
      )}
      
    </div>
  );
};

export default ProfileCard;
