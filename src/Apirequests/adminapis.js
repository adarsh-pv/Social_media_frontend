/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';


const admintoken = localStorage.getItem('adminToken')

const api = process.env.REACT_APP_MainURL;
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { admintoken } });
export const adminlogin = async (body) => {
  try{
    return await Instance.post('/admin', { body });
  }catch(error){
    console.log(error)
  }
};
export const findallusers = async (page) =>{
  try{
    return await Instance.put(`admin/findusers?page=${page}`)
  }catch(error){
    console.log(error)
  }
}
export const Block = async (id) =>{
  try{
    return await Instance.patch('admin/blockUser',{id})
  }catch(error){
    console.log(error)
  }
}
export const searchdata = async (body)=>{
  try{
    return await Instance.put('admin/Searchbar',{body})
  }catch(error){
    console.log(error)
  }
}
export const verifyAdmin = async () =>{
  try{
    return await Instance.get("/admin/verify")
  }catch(error){
    console.log(error)
    return undefined;
  }
}

