import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    // Here you would normally send a request to your backend
    console.log('Sending password reset link to:', email);
    alert(`Password reset link sent to ${email}`);
    navigate('/login'); // Redirect back to login after submission
  };

  return (
    <div className="forget-password-container">
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <h2>Forget Password</h2> 
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your valid email"
          />
        </div>

        <div className="btn">
          <button type="submit">Send Reset Link</button>
          <button type="button" onClick={() => navigate('/login')}>
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
