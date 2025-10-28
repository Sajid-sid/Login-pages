import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp,FaTwitter } from "react-icons/fa";

import './Login.css';
import logo from './assets/Logo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    console.log('Logging in with:', username, password);
    alert(`Logged in as: ${username}`);
    navigate('/home');
  };

  return (
    <div className="login-container">
     

      <form onSubmit={handleSubmit}>

         <div className="Login-header">
        <img src={logo} alt="App Logo" />
      </div>

      <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          className="ForgetPossword"
          onClick={() => navigate('/forgetpassword')}
        >
          <u><b>Forget Password</b></u>
        </div>

        <div className="btn">
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>

       <div className="para"><b>Or Sing Up Using</b></div>

         <div className=''></div>
          <div className="social-container">
               <a href="#" className="icon facebook"><FaFacebook /></a>
               <a href="#" className="icon instagram"><FaInstagram /></a>
               <a href="#" className="icon whatsapp"><FaWhatsapp /></a>
              <a href="#" className="icon twitter"><FaTwitter /></a>

            </div>
         
      </form>
      
    </div>
    
  );
}

export default Login;
