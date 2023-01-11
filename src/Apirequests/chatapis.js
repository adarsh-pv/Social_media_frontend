/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = process.env.REACT_APP_MainURL;
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });

export const createchat = async (id) =>{
  try{
    return await Instance.post('/chat/Createchat',{id})
  }catch(error){
    console.log(error)
  }
}
export const userChats = async (id) => {
  try{
    return await Instance.get(`/chat/Createchat/${id}`);
  }catch(error){
    console.log(error)
  }};
export const getMessages = async (ChatId) =>{
  try{
    return await Instance.get(`/message/${ChatId}`)
  }catch(error){
    console.log(error)
  }
}
export const addMessage = async (data) =>{
  try{
    return await Instance.post('/message',{data})
  }catch(error){
    console.log(error)
  }
}
