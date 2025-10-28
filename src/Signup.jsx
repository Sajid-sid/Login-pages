import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignUp.css';
function Signup() {
  const [username, setUsername] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // default country code
  const [MobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConformPassword, setConformPassword] = useState('');

  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !MobileNumber || !email || !password || !ConformPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== ConformPassword) {
      alert('Password did not match!');
      return;
    }

    if (countryCode === "select") {
  alert("Please select a country code.");
  return;
}


    if (!/^\d{10}$/.test(MobileNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    console.log('Signed up with:', username, countryCode + MobileNumber, email, password);
    alert(`Welcome, ${username}! Your number: ${countryCode + MobileNumber}`);
    navigate('/login'); 
  };

  return (
    <div className="signup-container">
      
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

       <div className="input-group">
  <label htmlFor="MobileNumber">Mobile Number</label>
  <div style={{ display: 'flex', gap: '5px' }}>
    {/* Country Code Dropdown */}
    <select
      value={countryCode}
      onChange={(e) => setCountryCode(e.target.value)}
      style={{ padding: '8px' }}
    >
      
      <option value="select">Select</option>
      <option value="+1">+1 US</option>
      <option value="+91">+91 IND</option>
      <option value="+44">+44 UK</option>
      <option value="+61">+61 AU</option>
      <option value="+33">+33 FR</option>
      <option value="+43">+43 AT</option>
      {/* Add more country codes as needed */}
    </select>

    {/* Mobile Number Input */}
    <input
      type="text"
      id="MobileNumber"
      value={MobileNumber}
      onChange={(e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
          setMobileNumber(value);
        }
      }}
      placeholder="Enter 10-digit number"
    />
  </div>
</div>


        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="ConformPassword">Confirm Password</label>
          <input
            type="password"
            id="ConformPassword"
            placeholder='Confirm password'
            value={ConformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button type="submit">Sign Up</button>
          <button
            type="button"
            onClick={() => navigate('/login')}
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
