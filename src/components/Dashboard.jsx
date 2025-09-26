import { useState } from 'react'
import Courses from './Courses'
import Settings from './Settings'
import TestScreen from './TestScreen'
import ResultsScreen from './ResultsScreen'
import './Dashboard.css'
import skyEducationLogo from '../assets/skyEducationLogo.png'

export default function Dashboard({ onLogout }) {
  const [currentView, setCurrentView] = useState('dashboard')
  const courses = [
    {
      id: 1,
      title: "Level 5 Certificate In Aesthetics Practice",
      lesson: "LESSON 1",
      qualification: "QUALIFI",
      duration: "2-30hr",
      progress: 75
    },
    {
      id: 2,
      title: "Level 5 SQA: Professional Taxi & Private Hire Driver Role (Scotland)",
      lesson: "LESSON 2",
      qualification: "SQA",
      duration: "2-30hr",
      progress: 60
    },
    {
      id: 3,
      title: "BTEC Level 2 ICQ: Professional Taxi and Private Hire (Sheffield)",
      lesson: "LESSON 3",
      qualification: "ICQ",
      duration: "2-30hr",
      progress: 40
    }
  ]

  const mentorLessons = [
    {
      id: 1,
      name: "Lesson 1",
      date: "25/2/2023",
      category: "QUALIFI",
      title: "Level 5 Certificate In Aesthetics...",
      status: "COMPLETE"
    },
    {
      id: 2,
      name: "Lesson 2", 
      date: "25/2/2023",
      category: "SEA",
      title: "Level 5 Certificate In Aesthetics...",
      status: "INCOMPLETE"
    }
  ]

  // Handle navigation to courses page
  const handleCoursesClick = () => {
    setCurrentView('courses')
  }

  // Handle navigation to settings page
  const handleSettingsClick = () => {
    setCurrentView('settings')
  }
  
  // Handle back to dashboard
  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
  }

  // Handle navigation to tests page
  const handleTestsClick = () => {
    setCurrentView('tests')
  }

  // Handle navigation to results page
  const handleResultsClick = () => {
    setCurrentView('results')
  }

  // Render main content based on current view
  const renderMainContent = () => {
    switch(currentView) {
      case 'courses':
        return <Courses onBack={handleBackToDashboard} />
      case 'settings':
        return <Settings onBack={handleBackToDashboard} />
      case 'tests':
        return (
          <div style={{ padding: '2rem' }}>
            <button onClick={handleBackToDashboard} className="sky-btn-secondary" style={{ marginBottom: '1rem' }}>
              ← Back to Dashboard
            </button>
            <h1>Tests</h1>
            <p>Select a course to take a test:</p>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h3>Level 5 Certificate In Aesthetics Practice - Lesson 1</h3>
                <p>Test your knowledge on the fundamentals of aesthetics practice.</p>
                <button className="sky-btn-primary">Take Test</button>
              </div>
            </div>
          </div>
        )
      case 'results':
        return (
          <div style={{ padding: '2rem' }}>
            <button onClick={handleBackToDashboard} className="sky-btn-secondary" style={{ marginBottom: '1rem' }}>
              ← Back to Dashboard
            </button>
            <h1>Test Results</h1>
            <p>Your test results and achievements:</p>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h3>Level 5 Certificate In Aesthetics Practice - Lesson 1</h3>
                <p>Score: 85% - Passed ✅</p>
                <p>Completed on: March 15, 2024</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="sky-bottom-grid">
            {/* Left Column */}
            <div>
              {/* Welcome Banner */}
              <div className="sky-welcome-banner">
                <div className="sky-welcome-content">
                  <p className="sky-welcome-subtitle">DASHBOARD</p>
                  <h2 className="sky-welcome-title">Welcome Back Emily!</h2>
                  <div className="sky-welcome-actions">
                    <button className="sky-btn-primary">
                      Resume Last Course
                    </button>
                    <button className="sky-btn-secondary">
                      Explore New Course
                    </button>
                  </div>
                </div>
                <div className="sky-welcome-decoration">
                  <div className="sky-welcome-star"></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="sky-stats-grid">
                <div className="sky-stat-card">
                  <div className="sky-stat-header">
                    <div className="sky-stat-icon blue">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <button className="sky-stat-menu">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="sky-stat-value">5</p>
                  <p className="sky-stat-label">Course Completed</p>
                </div>

                <div className="sky-stat-card">
                  <div className="sky-stat-header">
                    <div className="sky-stat-icon green">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <button className="sky-stat-menu">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="sky-stat-value">12</p>
                  <p className="sky-stat-label">Tests Completed</p>
                </div>

                <div className="sky-stat-card">
                  <div className="sky-stat-header">
                    <div className="sky-stat-icon red">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <button className="sky-stat-menu">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="sky-stat-value">22</p>
                  <p className="sky-stat-label">Incomplete Course</p>
                </div>
              </div>

              {/* Continue Course */}
              <div className="sky-section">
                <div className="sky-section-header">
                  <h3 className="sky-section-title">Continue Course</h3>
                  <div className="sky-section-controls">
                    <button className="sky-control-btn">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="sky-control-btn">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="sky-courses-grid">
                  {courses.map((course) => (
                    <div key={course.id} className="sky-course-card">
                      <div className="sky-course-image">
                        <img src={
                          course.id === 1 ? "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400&h=300&fit=crop" :
                          course.id === 2 ? "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop" :
                          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop"
                        } alt={course.title} className="sky-course-img" />
                        <div className="sky-course-badge">
                          {course.lesson}
                        </div>
                        <button className="sky-course-menu">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                          </svg>
                        </button>
                      </div>
                      <div className="sky-course-content">
                        <h4 className="sky-course-title">{course.title}</h4>
                        <div className="sky-course-meta">
                          <span className="sky-course-qualification">
                            {course.qualification}
                          </span>
                          <span className="sky-course-duration">{course.duration}</span>
                        </div>
                        <div className="sky-progress-section">
                          <div className="sky-progress-bar-container">
                            <div 
                              className="sky-progress-bar" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Mentor */}
              <div className="sky-section">
                <div className="sky-mentor-table-header">
                  <h3>Your Mentor</h3>
                  <a href="#" className="sky-see-all-link">See All</a>
                </div>

                <div className="sky-table-headers">
                  <div className="sky-table-header-item">COURSE NAME</div>
                  <div className="sky-table-header-item">COURSE CATEGORY</div>
                  <div className="sky-table-header-item">COURSE TITLE</div>
                  <div className="sky-table-header-item">STATUS</div>
                </div>

                {mentorLessons.map((lesson) => (
                  <div key={lesson.id} className="sky-mentor-row">
                    <div className="sky-mentor-info">
                      <div className="sky-mentor-avatar">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="sky-mentor-details">
                        <h4>{lesson.name}</h4>
                        <p>{lesson.date}</p>
                      </div>
                    </div>
                    <div className="sky-mentor-category">
                      <span className={`sky-mentor-badge ${lesson.category.toLowerCase()}`}>
                        {lesson.category}
                      </span>
                    </div>
                    <div className="sky-mentor-title">
                      <p>{lesson.title}</p>
                    </div>
                    <div className="sky-mentor-status">
                      <span className={`sky-status-badge ${lesson.status.toLowerCase()}`}>
                        {lesson.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar - Completed Courses */}
            <div className="sky-right-sidebar">
              <div className="sky-completed-header">
                <h3>Completed Courses</h3>
                <button className="sky-stat-menu">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                  </svg>
                </button>
              </div>

              <div className="sky-completed-item">
                <div className="sky-completed-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="sky-completed-info">
                  <h4>Level 5 Certificate In Aesthetics Practice</h4>
                  <p>QUALIFI</p>
                </div>
                <span className="sky-completed-score">100</span>
              </div>

              <div className="sky-see-all-center">
                <div className="sky-see-all-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <a href="#" className="sky-see-all-btn">See All</a>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="sky-dashboard">
      {/* Header */}
      <header className="sky-header">
        <div className="sky-header-content">
          <div className="sky-header-left">
            <div className="sky-header-logo">
              <img src={skyEducationLogo} alt="Sky Education Logo" className="sky-header-logo-image" />
            </div>
            <p className="sky-header-tagline">Reach for the SKY</p>
          </div>
          
          <div className="sky-search-container">
            <div className="sky-search-wrapper">
              <input
                type="text"
                placeholder="Search your course here..."
                className="sky-search-input"
              />
              <div className="sky-search-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="sky-main-layout">
        {/* Sidebar */}
        <aside className="sky-sidebar">
          <div className="sky-sidebar-content">
            {/* Logo Section */}
            <div className="sky-sidebar-logo">
              <img src={skyEducationLogo} alt="Sky Education Logo" className="sky-sidebar-logo-image" />
            </div>

            {/* Overview Section */}
            <div className="sky-sidebar-section">
              <h3 className="sky-sidebar-title">OVERVIEW</h3>
              <nav className="sky-sidebar-nav">
                <button onClick={() => setCurrentView('dashboard')} className={`sky-sidebar-link ${currentView === 'dashboard' ? 'active' : ''}`}>
                  <svg className="sky-sidebar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                  Dashboard
                </button>
                <button onClick={handleCoursesClick} className={`sky-sidebar-link ${currentView === 'courses' ? 'active' : ''}`}>
                  <svg className="sky-sidebar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
                  </svg>
                  Courses
                </button>
                <button onClick={handleTestsClick} className={`sky-sidebar-link ${currentView === 'tests' ? 'active' : ''}`}>
                  <svg className="sky-sidebar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Tests
                </button>
                <button onClick={handleResultsClick} className={`sky-sidebar-link ${currentView === 'results' ? 'active' : ''}`}>
                  <svg className="sky-sidebar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Results
                </button>
              </nav>
            </div>

            {/* Quick Actions Section */}
            <div className="sky-sidebar-section">
              <h3 className="sky-sidebar-title">QUICK ACTIONS</h3>
              <nav className="sky-sidebar-nav">
                <button onClick={handleSettingsClick} className={`sky-sidebar-link ${currentView === 'settings' ? 'active' : ''}`}>
                  <svg className="sky-sidebar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </button>
                <button onClick={onLogout} className="sky-sidebar-link logout">
                  <svg className="sky-sidebar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="sky-main-content">
          {renderMainContent()}
        </main>
      </div>
    </div>
  )
}