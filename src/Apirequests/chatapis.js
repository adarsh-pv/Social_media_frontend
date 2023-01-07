/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = 'http://localhost:4000';
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });

export const createchat = async (id) =>{
  return await Instance.post('/chat/Createchat',{id})
}
export const userChats = async (id) => {
  console.log(id,"idddddddddddddd")
  return await Instance.get(`/chat/Createchat/${id}`);
};
export const getMessages = async (ChatId) =>{
  console.log(ChatId,"we")
    return await Instance.get(`/message/${ChatId}`)
}
export const addMessage = async (data) =>{
  console.log(data,"llol")
  return await Instance.post('/message',{data})
}
