/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = 'http://localhost:4000';
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });
export const adminlogin = async (body) => {
  return await Instance.post('/admin', { body });
};
export const findallusers = async (page) =>{
    return await Instance.put(`admin/findusers?page=${page}`)
}
export const Block = async (id) =>{
  console.log(id)
  return await Instance.patch('admin/blockUser',{id})
}
export const searchdata = async (body)=>{
  console.log("first",body)
  return await Instance.put('admin/Searchbar',{body})
}

