import { useState } from 'react'
import SkillUpZoneLogin from './SkillUpZoneLogin'
import SkillUpZoneMain from './SkillUpZoneMain'

export default function SkillUpZone() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      {isLoggedIn ? (
        <SkillUpZoneMain onLogout={handleLogout} />
      ) : (
        <SkillUpZoneLogin onLogin={handleLogin} />
      )}
    </div>
  )
}