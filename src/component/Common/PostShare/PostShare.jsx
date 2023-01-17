/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import './PostShare.css';
import { UilScenery } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { createpost } from '../../../Apirequests/postapis';
import { UilBookmark } from '@iconscout/react-unicons';
import Circles from 'react-loading-icons/dist/esm/components/circles';
// import dotenv from'dotenv'
// dotenv.config()


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PostShare = ({allpost}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const [image, setImg] = useState(null);
  const imageRef = useRef();
  const [imageSelected, setImageSelected] = useState('');

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageSelected(event.target.files[0]);
      setImg({
        image: URL.createObjectURL(img)
      });
    }
  };
  const navigate = useNavigate();
  const uploadImage=  (files) => {
    setIsLoading(true); 
    files.preventDefault();
    if (imageSelected) {
      const formData = new FormData();
      const textData = new FormData();
      formData.append('file', imageSelected);
      textData.append('text', text);
      formData.append('upload_preset', process.env.REACT_APP_PresetName);
    
      axios
        .post(process.env.REACT_APP_CloudURL, formData)
        .then((response) => {
          createpost({ image: response.data.secure_url, caption: text }).then(async()=>{
            await  allpost()
            setIsLoading(false);
          })
    // allpost()

          // console.log(response.data.secure_url,"hia")
          
        });
    } else {
      createpost({ caption: text }).then(async()=>
      {

       await allpost()
        setIsLoading(false);
      })
    }

    // createpost(text)
  };

  return (
    <div className="PostShare">
    {isLoading ? (
      <div>
          <Circles style={{ backgroundColor: 'orange',marginLeft:'auto',marginRight:'auto' }} />
        </div> ):
    (
      <>
      
      <b>Share<br/>Your<br/>Thoughts</b>
      <div>
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
          placeholder="What's happening"></input>

        <div className="PostOptions">
          <div
            className="option"
            style={{ color: '#4CB256' }}
            onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: '#4A4EB7' }}>
            <UilUser onClick={() => navigate(`/allusers`)} />
            Allusers
          </div>
          <div className="option" style={{ color: '#EF5757' }}>
            <UilBookmark onClick={()=>navigate('/savedpost')}/>
            Savedposts
          </div>
          <button type="submit" onClick={uploadImage} className="button ps-button">
            Share
          </button>
          <div style={{ display: 'none' }}>
            <input
              type="file"
              name="myimage"
              onChange={onImageChange}
              ref={imageRef}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImg(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
      </>
      )}
    </div>
  );
};

export default PostShare;
