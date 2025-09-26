import { useState } from 'react'
import './LoginScreen.css' // Reuse the same styles
import logo01 from '../assets/logo01.png'

export default function SignupScreen({ onSignup, onBackToLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        onSignup()
      } else {
        alert('Passwords do not match!')
      }
    }
  }

  return (
    <div className="sky-login-container">
      {/* Left Panel */}
      <div className="sky-login-left">
        {/* Background circles */}
        <div className="sky-bg-circle-1"></div>
        <div className="sky-bg-circle-2"></div>
        <div className="sky-bg-circle-3"></div>
        
        {/* Logo */}
        <div className="sky-logo-section">
          <div className="sky-logo-container">
            <img src={logo01} alt="Sky Education Logo" className="sky-logo-image" />
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
            <h2>Create Account</h2>
            <p>Join Sky Education Today</p>
          </div>

          <form className="sky-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="sky-form-input"
              required
            />

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

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="sky-form-input"
              required
            />

            <button type="submit" className="sky-login-btn">
              Sign Up
            </button>
          </form>

          <div className="sky-form-links">
            <span className="sky-signup-text">
              Already have an account?{' '}
              <button 
                type="button"
                onClick={onBackToLogin}
                className="sky-signup-link"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                Login here
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}