import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [suc, setSuc] = useState()
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {

    axios.get("http://localhost:8000/dashboard")
      .then(res => {
        if (res.data === "Success") {
        setSuc("Success OK")
        } else {
          navigate('/')
        }
        console.log(res.data);
    }).catch(err => console.log(err))
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{ suc}</p>
    </div>
  );
}

export default Dashboard