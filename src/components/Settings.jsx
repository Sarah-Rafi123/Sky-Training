import { useState } from 'react'
import './Settings.css'

export default function Settings({ onBack }) {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    profilePicture: null
  })

  const [editData, setEditData] = useState({ ...userData })

  const handleSave = () => {
    setUserData({ ...editData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({ ...userData })
    setIsEditing(false)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setEditData({ ...editData, profilePicture: e.target.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button onClick={onBack} className="back-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>
        <h1>Settings</h1>
      </div>

      <div className="settings-content">
        <div className="settings-card">
          <div className="card-header">
            <h2>User Profile</h2>
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="edit-button">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </button>
            ) : (
              <div className="edit-actions">
                <button onClick={handleCancel} className="cancel-button">
                  Cancel
                </button>
                <button onClick={handleSave} className="save-button">
                  Save Changes
                </button>
              </div>
            )}
          </div>

          <div className="profile-section">
            <div className="profile-picture-section">
              <div className="profile-picture">
                {(isEditing ? editData.profilePicture : userData.profilePicture) ? (
                  <img src={isEditing ? editData.profilePicture : userData.profilePicture} alt="Profile" />
                ) : (
                  <div className="default-avatar">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="profile-picture-actions">
                  <input
                    type="file"
                    id="profile-image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                  />
                  <label htmlFor="profile-image" className="upload-button">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Change Photo
                  </label>
                </div>
              )}
            </div>

            <div className="profile-info">
              <div className="form-group">
                <label>Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="form-input"
                  />
                ) : (
                  <div className="form-value">{userData.name}</div>
                )}
              </div>

              <div className="form-group">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    className="form-input"
                  />
                ) : (
                  <div className="form-value">{userData.email}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <h2>Account Settings</h2>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Change Password</h3>
                <p>Update your password to keep your account secure</p>
              </div>
              <button className="setting-action">
                Change
              </button>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h3>Email Notifications</h3>
                <p>Manage your email notification preferences</p>
              </div>
              <button className="setting-action">
                Manage
              </button>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h3>Privacy Settings</h3>
                <p>Control who can see your profile and activity</p>
              </div>
              <button className="setting-action">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}