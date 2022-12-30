/* eslint-disable prettier/prettier */
import { borderRadius } from '@mui/system'
import React from 'react'

const Conversation = () => {
  return (
<>
    <div className="follower conversation">
        <div>
            <div className='online-dot'></div>
            <img
               className='followerImage'
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              style={{width:'50px',height:'50px',borderRadius: '50px'}}
            />
            <div className='name' style={{fontSize:"0.8rem"}}>
                <span>Adarsh pv</span>
                <span>Online</span>
            </div>
        </div>
    </div>
    <hr style={{width:'85%',border:'0.1px solid #ececec',marginTop:'10px'}}/>
     
    </>
  )
}

export default Conversation