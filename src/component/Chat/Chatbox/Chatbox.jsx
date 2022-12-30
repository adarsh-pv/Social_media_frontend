/* eslint-disable prettier/prettier */
import React from 'react';
import './Chatbox.css';
import InputEmoji from 'react-input-emoji'

const Chatbox = () => {
  return (
    <>
      <div className="ChatBox-container">
        <>
          <div className="chat-header">
            <div className="follower">
              <div>
                <img
                  className="followerImage"
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  style={{ width: '50px', height: '50px', borderRadius: '50px' }}
                />
                <div className="name" style={{ fontSize: '0.8rem' }}>
                  <span>Adarsh pv</span>
                </div>
              </div>
            </div>
            <hr style={{width:'85%',border:'0.1px solid #ececec',marginTop:'10px'}}/>
          </div>
          <div className="chat-body">
        <>
        <div className="message own">
            <span>hello</span>
            <span>message date</span>
        </div>
        </>
     </div>
     <div className="chat-sender">
        <div>+</div>
        <InputEmoji
      />
      <div className="send-button button">Send</div>
     </div>
        </>
      </div>
    </>
  );
};

export default Chatbox;
