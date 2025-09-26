import { useState } from 'react'
import './LoginScreen.css'
import skyEducationLogo from '../assets/skyEducationLogo.png'

export default function LoginScreen({ onLogin, onGoToSignup, onGoToForgotPassword }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      onLogin()
    }
  }

  return (
    <div className="sky-login-container">
      {/* Left Panel */}
      <div className="sky-login-left">
        {/* Background circles */}
        <div className="sky-bg-circle-1"></div>
        <div className="sky-bg-circle-2"></div>
        
        {/* Logo */}
        <div className="sky-logo-section">
          <div className="sky-logo-container">
            <img src={skyEducationLogo} alt="Sky Education Logo" className="sky-logo-image" />
          </div>
          <p className="sky-tagline">Reach for the SKY</p>
        </div>

        <div className="sky-content">
          <h2>
            The most popular peer to peer lending at SEA
          </h2>
          <button className="sky-read-more-btn">
            Read More
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="sky-login-right">
        <div className="sky-login-form-container">
          <div className="sky-login-header">
            <h2>Hello Again!</h2>
            <p>Welcome Back</p>
          </div>

          <form className="sky-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sky-form-input"
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="sky-form-input"
              required
            />

            <button type="submit" className="sky-login-btn">
              Login
            </button>
          </form>

          <div className="sky-form-links">
            <button 
              type="button"
              onClick={onGoToForgotPassword}
              className="sky-link"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              Forgot Password?
            </button>
            <button 
              type="button"
              onClick={onGoToSignup}
              className="sky-link"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}