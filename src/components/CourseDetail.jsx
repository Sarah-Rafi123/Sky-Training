import { useState } from 'react'
import { courseUnits } from '../course1/courseData'
import UnitView from './UnitView'
import './CourseDetail.css'

export default function CourseDetail({ courseId, onBack }) {
  const [selectedUnit, setSelectedUnit] = useState(null)

  const handleUnitClick = (unitId) => {
    setSelectedUnit(unitId)
  }

  const handleBackToUnits = () => {
    setSelectedUnit(null)
  }

  if (selectedUnit) {
    return (
      <UnitView 
        unitId={selectedUnit} 
        onBack={handleBackToUnits}
        onBackToCourse={onBack}
      />
    )
  }

  return (
    <div className="course-detail-container">
      {/* Header */}
      <div className="course-detail-header">
        <button className="back-button" onClick={onBack}>
          <svg className="back-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>
        
        <div className="course-title-section">
          <h1 className="course-title">Level 5 SQA: Professional Taxi & Private Hire Driver Role (Scotland)</h1>
          <p className="course-subtitle">Advanced comprehensive knowledge for experienced drivers seeking to excel in the passenger transport sector</p>
        </div>
      </div>

      {/* Course Overview */}
      <div className="course-overview">
        <div className="overview-stats">
          <div className="stat-item">
            <span className="stat-number">{courseUnits.length}</span>
            <span className="stat-label">Units</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{courseUnits.reduce((total, unit) => total + unit.pages, 0)}</span>
            <span className="stat-label">Pages</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{courseUnits.reduce((total, unit) => total + parseInt(unit.duration), 0)}</span>
            <span className="stat-label">Hours</span>
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <div className="units-section">
        <h2 className="units-title">Course Units</h2>
        <div className="units-grid">
          {courseUnits.map((unit) => (
            <div 
              key={unit.id} 
              className="unit-card"
              onClick={() => handleUnitClick(unit.id)}
              style={{ borderLeftColor: unit.color }}
            >
              <div className="unit-header">
                <div className="unit-icon" style={{ backgroundColor: unit.color + '20', color: unit.color }}>
                  {unit.icon}
                </div>
                <div className="unit-info">
                  <h3 className="unit-title">{unit.title}</h3>
                  <p className="unit-description">{unit.description}</p>
                </div>
              </div>
              
              <div className="unit-meta">
                <div className="meta-item">
                  <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{unit.duration}</span>
                </div>
                <div className="meta-item">
                  <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{unit.pages} pages</span>
                </div>
              </div>
              
              <div className="unit-action">
                <button className="start-unit-btn">
                  Start Unit
                  <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Progress */}
      <div className="course-progress-section">
        <h3>Your Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '0%' }}></div>
        </div>
        <p className="progress-text">0 of {courseUnits.length} units completed</p>
      </div>
    </div>
  )
}