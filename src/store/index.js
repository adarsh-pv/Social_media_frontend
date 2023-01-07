/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';
import { userSlice } from './usersSlice';

const store = configureStore({ reducer: { authReducer: AuthSlice.reducer ,userReducer:userSlice.reducer } });
export default store;
