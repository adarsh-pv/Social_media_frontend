/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import './Chatbox.css';
import InputEmoji from 'react-input-emoji';
import { getUser } from '../../../Apirequests/authapis';
import unknownuser from '../../../img/unknown.png';
import { addMessage, getMessages } from '../../../Apirequests/chatapis';
import { format } from 'timeago.js';

// eslint-disable-next-line react/prop-types
const Chatbox = ({ chat, currenUser, setSendMessage, receiveMessage }) => {
  const [userData, setUserdata] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scroll = useRef();

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage?.ChatId === chat?._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currenUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserdata(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currenUser]);

  useEffect(() => {
    const fetchaMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchaMessages();
  }, [chat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      SenderId: currenUser,
      text: newMessage,
      ChatId: chat._id
    };

    if (message.text === '') {
      const { data } = await addMessage();
    } else {
      try {
        const { data } = await addMessage(message);
        setMessages([...messages, data]);
        setNewMessage('');
      } catch (error) {
        console.log(error);
      }
    }

    const receiverId = chat?.members?.find((id) => id !== currenUser);
    setSendMessage({ ...message, receiverId });
  };
  useEffect(() => {
    scroll.current?.scrollIntoView(() => {
      behavior: 'smooth';
    }, [messages]);
  });
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    className="followerImage"
                    style={{ width: '50px', height: '50px' }}
                    src={userData?.profileimage ? userData?.profileimage : unknownuser}
                  />
                  <div className="name" style={{ fontSize: '0.8rem' }}>
                    <span>{userData?.name}</span>
                  </div>
                </div>
              </div>
              <hr style={{ width: '85%', border: '0.1px solid #ececec', marginTop: '10px' }} />
            </div>
            <div className="chat-body">
              {messages?.map((message) => (
                <>
                  <div
                    ref={scroll}
                    className={message.SenderId === currenUser ? 'message own' : 'message'}>
                    <span>{message.text}</span>
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="chat-sender">
              <div>+</div>
              <InputEmoji value={newMessage} onChange={handleChange} />
              <div className="send-button button" onClick={handleSend}>
                Send
              </div>
            </div>
          </>
        ) : (
          <span className="chatbox-empty-message">Tap on a Chat to start conversation</span>
        )}
      </div>
    </>
  );
};

export default Chatbox;
