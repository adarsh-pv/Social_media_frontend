/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Pagination, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Button, Paper, Table } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Block, findallusers } from '../../../Apirequests/adminapis';
import { useEffect } from 'react';

export const Tabledata = () => {
  const [clients,setClients] = useState([])

  const [activePage, setPage] = useState(1);
  const [totalPages, setTotal] = useState();
  const handleBlock = async (id)=>{
    const response = await Block(id)
    console.log(response.data.isBlocked,"block")
   users(activePage)
  }
  const users =async (page) =>{
    const response =await  findallusers(page)
    console.log(response)
    if(response){

      setClients(response.data.response)
      const total = response.data.TotalUsers
      console.log(Math.ceil(total),total);
      setTotal(Math.ceil(response.data.TotalUsers/3))
    }
  }
  console.log(clients,"lll")
  console.log(totalPages,"cli")
  
  const {searchResult} = useSelector((state) =>state.userReducer)
  console.log(searchResult,"data")
  useEffect(()=>{
    // handleBlock()
    // setPage()
    users(activePage)

  },[])
  const changePage = (e,page) => {
    setPage(page);
    users(page);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total Users</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
          {searchResult?.length == 0 ?
          clients.length ===0 ? <h1>No user</h1> :
           clients.map((client)=>{
   return(
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {client.name}
            </TableCell>
            <TableCell align="left">{client.email}</TableCell>
            {client.isBlocked == false ?<TableCell align="left">Active</TableCell>:<TableCell align="left">Blocked</TableCell>}
            <TableCell align="left">
              {client.isBlocked == false ? <Button className='button' style={{width:'70px'}} onClick={()=>handleBlock(client._id)}>Block</Button> : <Button style={{width:'70px'}}  className='button' onClick={()=>handleBlock(client._id)}>UnBlock</Button>}
            </TableCell>
          </TableRow>
   )
          }):
          searchResult.map((value)=>{
            return(
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {value.name}
            </TableCell>
            <TableCell align="left">{value.email}</TableCell>
            {value.isBlocked == false ?<TableCell align="left">Active</TableCell>:<TableCell align="left">Blocked</TableCell>}
            <TableCell align="left">
            {value.isBlocked == false ?<Button className='button' style={{width:'70px'}} onClick={()=>handleBlock(value._id)}>Block</Button>:<Button className='button' style={{width:'70px'}} onClick={()=>handleBlock(value._id)}>UnBlock</Button>}
            </TableCell>
          </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-10">
        <Pagination
          page={activePage}
          onChange={changePage}
          count={totalPages}
        />
      </div>
    </TableContainer>
  );
};
