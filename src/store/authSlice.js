/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    userName: '',
     userid:""
  },
  reducers: {
    setName: (state, actions) => {
      state.userName = actions.payload;
    },
    setAuth: (state, actions) => {
      state.auth = actions.payload;
    },
    setUserid: (state,actions) =>{
      state.userid = actions.payload; 
    },
    setAdminAuth:(state,actions)=>{
      state.admin = actions.payload
    }
  }
});

export const { setName, setAuth ,setUserid, setAdminAuth } = AuthSlice.actions;
export default AuthSlice;
