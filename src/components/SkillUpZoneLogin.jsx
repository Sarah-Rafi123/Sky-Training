import { useState } from 'react'
import './SkillUpZoneLogin.css'
import logo01 from '../assets/logo01.png'

export default function SkillUpZoneLogin({ onLogin }) {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [pinCode, setPinCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userId && password && pinCode) {
      onLogin()
    }
  }

  return (
    <div className="skillup-login-container">
      {/* Background Pattern */}
      <div className="skillup-background-pattern">
        <div className="skillup-bg-circle-1"></div>
        <div className="skillup-bg-circle-2"></div>
        <div className="skillup-bg-circle-3"></div>
      </div>

      <div className="skillup-login-content">
        {/* Logo/Header Section */}
        <div className="skillup-header">
          <div className="skillup-logo-container">
            <img src={logo01} alt="Skill Up Zone Logo" className="skillup-logo-image" />
          </div>
          <h1 className="skillup-title">SKILL UP ZONE</h1>
          <p className="skillup-tagline">IGNITE YOUR SUCCESS</p>
        </div>

        {/* Login Form */}
        <div className="skillup-form-container">
          <form onSubmit={handleSubmit} className="skillup-form">
            <div className="skillup-form-group">
              <label htmlFor="userId" className="skillup-label">
                User ID
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="skillup-input"
                placeholder="Enter your User ID"
                required
              />
            </div>

            <div className="skillup-form-group">
              <label htmlFor="password" className="skillup-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="skillup-input"
                placeholder="Enter your Password"
                required
              />
            </div>

            <div className="skillup-form-group">
              <label htmlFor="pinCode" className="skillup-label">
                Pin Code
              </label>
              <input
                id="pinCode"
                type="text"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="skillup-input"
                placeholder="Enter your Pin Code"
                required
              />
            </div>

            <button type="submit" className="skillup-login-btn">
              Login
            </button>
          </form>

          <div className="skillup-form-links">
            <p className="skillup-signup-text">
              Don't have an account?{' '}
              <a href="#" className="skillup-signup-link">
                Sign up here
              </a>
            </p>
            
            <a href="#" className="skillup-forgot-link">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="skillup-footer">
          <p className="skillup-footer-text">
            © 2024 Skill Up Zone. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}