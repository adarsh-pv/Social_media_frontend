/* eslint-disable prettier/prettier */
import React from 'react'
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

const Chat = () => {
  const {userid} = useSelector((state)=>state.authReduce)
  console.log(userid,"uuuuuuud")
    const navigate = useNavigate('')
  return (
    <div className="App">
    <div className="blur" style={{ top: '-18%', right: '0' }}></div>
    <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
    <div>
    <div className='Chat'>
      <div className='Left-Side-Chat'>
        <LogoSearch/>
        <div className='Chat-container'>

        <h2>Chats</h2>
      <div className='Chat-list'>
        <Conversation/>
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
      <Chatbox/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Chat