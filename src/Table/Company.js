import React, {useState} from 'react';
import {useEffect} from 'react';
import UserTable from './UserTable';
import AddTable from './AddTable';
import axios from 'axios';

function Company() {

  let axiosConfig = {
    headers: {
        'Content-Type':  'application/json',
    }
  };

    const [companies, setCompany] = useState([]);

  useEffect(() => {
    getCompany();
  }, []);

   async function getCompany() {
    let res = await axios.get("/company");
    let  data  = res.data;
    setCompany( data );
  };

  

    function addCompany(company)  {  
      company.id = companies.length +1;
    setCompany([...companies, company]);
   
  const axios = require('axios');

async function makePostRequest() {

  

    let res = await axios.post('/save',{
      name: company.name,
      price: company.price,
      change:  company.change,
      pctChange:  company.pctChange,
      lastChange:  company.lastChange
    }).then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });

    
}
console.log(company);
makePostRequest();

  
  };
    const deleteFormState = { 
      id: null, 
      name: '',
      price: '',
      change: '',
      pctChange: '',
      lastChange: ''}

  async function deleteCompany(id) {
    
    companies.map(user =>(
      user.id === id ? (
        deleteFormState.id = user.id,
        deleteFormState.name = user.name,
        deleteFormState.price = user.price,
        deleteFormState.change = user.change,
        deleteFormState.pctchange = user.pctChange,
        deleteFormState.lastchange = user.lastChange,
        console.log(deleteFormState)
      ) : (
        console.log()
      )));
    setCompany(companies.filter(company => company.id !== id))

  axios.post('/delete', deleteFormState, axiosConfig).then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });

}

return (
  <div>
    <h2 align = "left" style = {{margin: 10}}>Add User</h2>
    <AddTable addCompany = {addCompany}/>
      <h2 align = "left" style = {{margin: 10}}>View Users</h2>
      <UserTable companies = {companies} deleteCompany={deleteCompany}/> 
      </div>
);

}

export default Company;