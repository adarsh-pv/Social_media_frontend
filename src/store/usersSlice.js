/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userslice',
  initialState: {
    peoples: [],
    searchResult: [],
 USER: {
    fullname:'',
    email:'',
    number:'',
    DOB:'',
    works:'',
    livesin:'',
    githublink:'',
    status:'',
    linkdinlink:''
  }

  },
  reducers: {
    setPeoples: (state, action) => {
      state.peoples = action.payload;
    },
    setAllusersdata: (state,action) =>{
      state.USER = action.payload;
    },
    setSearchresult: (state,action) =>{
      state.searchResult = action.payload;
    }
  }
});

export const { setPeoples ,setAllusersdata , setSearchresult} = userSlice.actions;
