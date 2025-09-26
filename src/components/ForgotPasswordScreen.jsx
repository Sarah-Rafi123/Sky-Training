import { useState } from 'react'
import './LoginScreen.css' // Reuse the same styles
import skyEducationLogo from '../assets/skyEducationLogo.png'

export default function ForgotPasswordScreen({ onResetRequest, onBackToLogin }) {
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      onResetRequest()
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
            <h2>Reset Password</h2>
            <p>Enter your email to receive reset instructions</p>
          </div>

          <form className="sky-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sky-form-input"
              required
            />

            <button type="submit" className="sky-login-btn">
              Send Reset Email
            </button>
          </form>

          <div className="sky-form-links">
            <span className="sky-signup-text">
              Remember your password?{' '}
              <button 
                type="button"
                onClick={onBackToLogin}
                className="sky-signup-link"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                Back to Login
              </button>
            </span>
          </div>

          {/* Additional Info */}
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)', 
            borderRadius: '0.5rem',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#374151', 
              margin: 0,
              lineHeight: '1.5'
            }}>
              <strong>📧 What happens next?</strong><br />
              We'll send you an email with instructions to reset your password. 
              Please check your inbox and spam folder.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}