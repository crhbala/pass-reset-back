import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Signup() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
     await axios
       .post("https://pssrst.onrender.com/register", { name, email, password })
       .then((res) => {
         if (res.data.status === 200) {
           console.log(res.data);
           navigate("/login");
         }
       });
      // if (res.status === 200) {
      //   console.log("success");
      //   navigate('/login')
      // }
    } catch (error) {
      console.log(error);
    }


  }
  

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="name"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>
          Already Have an Account
        </p>

        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 "
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup