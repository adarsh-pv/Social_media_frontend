/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Conversation from '../component/Chat/Conversation/Conversation'
import LogoSearch from '../component/Common/LogoSearch/LogoSearch'
import Home from '../img/home.png'
import { UilBookmark } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import Comment from '../img/comment.png'

// import Message from '../component/Chat/chats';
import './Chat.css'
import Chatbox from '../component/Chat/Chatbox/Chatbox'
import { useSelector } from 'react-redux'
import { userChats } from '../Apirequests/chatapis'
import {io} from 'socket.io-client'
import FollowersCard from '../component/Common/FollowersCard/FollowersCard'
const Chat = () => {
  const [chats,setChats] = useState([])
  const [currenChat,setCurrentChat] = useState(null)
  const [onlineUsers,setOnlineUsers] = useState([])
  const [sendMessage,setSendMessage] =useState(null)
  const [receiveMessage,setReceiveMessage] =useState(null)


  const {userid} = useSelector((state)=>state.authReducer)
  const socket = useRef()
   useEffect(()=>{
   if(sendMessage!==null) {
    socket.current.emit('send-message',sendMessage)
   }
   },[sendMessage])
  useEffect(()=>{
   socket.current = io('http://localhost:8800')
   socket.current.emit("new-user-add",userid)
   socket.current.on('get-Users', (users) =>{
    setOnlineUsers(users);
  })
},[userid])

useEffect(()=>{
  const getChats = async() =>{
    const response = await userChats(userid)
    setChats(response.data)
  }
  getChats()
},[userid])

useEffect(()=>{
  socket.current.on("receive-message",(data)=>{
    setReceiveMessage(data)
  })
},[])

const navigate = useNavigate('')
const checkOnlineStatus = (chat) =>{
  const chatMember = chat.members.find((member) => member!==userid)
  const online = onlineUsers.find((user)=>user.userId ===chatMember)
  return online? true : false
}

return (
  <div className="App">
    <div className="blur" style={{ top: '-18%', right: '0' }}></div>
    <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
    <div>
    <div className='Chat'>
      <div className='Left-Side-Chat'>
        <LogoSearch />
        <div className='Chat-container'>
        <FollowersCard location='chat'/>
        <h2>Chats</h2>
      <div className='Chat-list'>
        {chats.map((chat)=>{
        return   (<div onClick={()=>setCurrentChat(chat)}>
             <Conversation key={chat._id} data={chat} currentUserId={userid} online={checkOnlineStatus(chat)}/> 
           </div> )
          })} 
      </div>
        </div>
      </div>
      <div className='Right-side-chat'>
        <div style={{width:'20rem',alignSelf:'flex-end'}}>
      <div className="navIcons">
        <img src={Home} alt="" onClick={()=>navigate('/home')}/>
        <UilUser
         onClick={()=>navigate(`/allusers`)}/>
        <UilBookmark
         onClick={()=>navigate(`/savedpost`)}/>
        <img src={Comment} alt=""  onClick={()=>navigate('/chat')}/>
      </div>
      </div>
      <Chatbox chat={currenChat} currenUser={userid} setSendMessage={setSendMessage} 
      receiveMessage={receiveMessage}/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Chat