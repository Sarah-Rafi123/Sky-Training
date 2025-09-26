import { useState } from 'react'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import ForgotPasswordScreen from './components/ForgotPasswordScreen'
import Dashboard from './components/Dashboard'

function App() {
  const [currentScreen, setCurrentScreen] = useState('login')
  
  const handleLogin = () => {
    setCurrentScreen('dashboard')
  }
  
  const handleLogout = () => {
    setCurrentScreen('login')
  }
  
  const handleGoToSignup = () => {
    setCurrentScreen('signup')
  }
  
  const handleGoToForgotPassword = () => {
    setCurrentScreen('forgot-password')
  }
  
  const handleSignup = () => {
    // After successful signup, redirect to login
    setCurrentScreen('login')
  }
  
  const handleResetRequest = () => {
    // After successful reset request, show confirmation and redirect to login
    alert('Password reset email sent! Please check your inbox.')
    setCurrentScreen('login')
  }
  
  const handleBackToLogin = () => {
    setCurrentScreen('login')
  }

  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      {currentScreen === 'login' && (
        <LoginScreen 
          onLogin={handleLogin} 
          onGoToSignup={handleGoToSignup}
          onGoToForgotPassword={handleGoToForgotPassword}
        />
      )}
      {currentScreen === 'signup' && (
        <SignupScreen 
          onSignup={handleSignup} 
          onBackToLogin={handleBackToLogin} 
        />
      )}
      {currentScreen === 'forgot-password' && (
        <ForgotPasswordScreen 
          onResetRequest={handleResetRequest} 
          onBackToLogin={handleBackToLogin} 
        />
      )}
      {currentScreen === 'dashboard' && <Dashboard onLogout={handleLogout} />}
    </div>
  )
}

export default App
