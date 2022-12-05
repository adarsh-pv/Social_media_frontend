/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import ProfileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { createpost } from '../../Apirequests/postapis';
import axios from 'axios';
// import { useState } from 'react'
const PostShare = () => {
  const [text, setText] = useState('');
  const [image, setImg] = useState(null);
  const imageRef = useRef();
  const [imageSelected, setImageSelected] = useState('');
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img);
      setImageSelected(event.target.files[0]);
      setImg({
        image: URL.createObjectURL(img)
      });
    }
  };

  const uploadImage = (files) => {
    files.preventDefault();
    console.log(files[0], 's');

    const formData = new FormData();
    const textData = new FormData();
    console.log('dddd', imageSelected);
    formData.append('file', imageSelected);

    textData.append('text', text);

    formData.append('upload_preset', 'post_cloud');

    axios
      .post('https://api.cloudinary.com/v1_1/dufx7jvrn/image/upload', formData)
      .then((response) => {
        createpost({ image: response.data.secure_url, caption: text });
        // console.log(response.data.secure_url,"hia")
      });
    // createpost(text)
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
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
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: '#EF5757' }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: '#E1AE4A' }}>
            <UilSchedule />
            Shedule
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
              // onChange={(event) => {
              // setImageSelected(event.target.files[0])
              // }}
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
    </div>
  );
};

export default PostShare;
