import React, { useState } from 'react';
import './SignIn.css';

export default function SignIn() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,20}$/;
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    const handlePasswordVisibility = () => {
      setPasswordVisible((prevState) => !prevState);
    };
  
    const handleConfirmPasswordVisibility = () => {
      setConfirmPasswordVisible((prevState) => !prevState);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
      } else if (!passwordPattern.test(formData.password)) {
        alert(
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, and be 8 to 20 characters long.'
        );
      } else {
        alert('Sign up successful!');
      }
    };
  
    return (
      <div className="Main-container">
        <div className="Sign-in-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="input-Sign-in-container">
               <input
                type="text"
                id="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              {/* <i className="icon fas fa-user"> </i> */}
            </div>
            <div className="input-Sign-in-container">
              {/* <i className="icon fas fa-envelope"></i> */}
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-Sign-in-container">
              {/* <i className="icon fas fa-lock"></i> */}
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <span className="show-password" onClick={handlePasswordVisibility}>
                <i className={passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}>
                </i>
              </span>
            </div>
            <div className="input-Sign-in-container">
              {/* <i className="icon fas fa-lock"></i> */}
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <span className="show-password" onClick={handleConfirmPasswordVisibility}>
                <i className={confirmPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </span>
            </div>
            <button type="submit" className='Sign-in-button'>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }