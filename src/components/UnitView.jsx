import { useState } from 'react'
import { courseUnits, getUnitPages } from '../course1/courseData'
import './UnitView.css'

export default function UnitView({ unitId, onBack, onBackToCourse }) {
  const [currentPage, setCurrentPage] = useState(1)
  
  const unit = courseUnits.find(u => u.id === unitId)
  const pages = getUnitPages(unitId)
  const currentPageContent = pages.find(p => p.pageNumber === currentPage)

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageJump = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if (!unit || !currentPageContent) {
    return (
      <div className="unit-error">
        <h2>Unit not found</h2>
        <button onClick={onBack}>Back to Units</button>
      </div>
    )
  }

  return (
    <div className="unit-view-container">
      {/* Unit Header */}
      <div className="unit-view-header">
        <div className="unit-navigation">
          <button className="nav-back-btn" onClick={onBack}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Units
          </button>
          <button className="nav-course-btn" onClick={onBackToCourse}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg>
            Back to Course
          </button>
        </div>
        
        <div className="unit-header-info">
          <div className="unit-badge" style={{ backgroundColor: unit.color }}>
            {unit.icon}
          </div>
          <div className="unit-details">
            <h1 className="unit-main-title">{unit.title}</h1>
            <p className="unit-main-description">{unit.description}</p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="unit-progress">
        <div className="progress-info">
          <span className="page-counter">Page {currentPage} of {pages.length}</span>
          <span className="unit-duration">{unit.duration} total</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentPage / pages.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="unit-content-area">
        {/* Page Navigation Sidebar */}
        <div className="page-navigation-sidebar">
          <h4>Pages</h4>
          <div className="page-list">
            {pages.map((page) => (
              <button
                key={page.pageNumber}
                className={`page-nav-item ${currentPage === page.pageNumber ? 'active' : ''}`}
                onClick={() => handlePageJump(page.pageNumber)}
              >
                <span className="page-number">{page.pageNumber}</span>
                <span className="page-title">{page.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="page-content">
          <div className="page-header">
            <h2 className="page-title">{currentPageContent.title}</h2>
          </div>
          
          <div className="page-body">
            {currentPageContent.isImage ? (
              <div className="page-image-container">
                <img 
                  src={currentPageContent.imagePath} 
                  alt={`${unit.title} - Page ${currentPage}`}
                  className="page-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="image-error" style={{ display: 'none' }}>
                  <p>Unable to load page image</p>
                  <p className="error-path">{currentPageContent.imagePath}</p>
                </div>
              </div>
            ) : (
              <div className="page-text-content">
                <div dangerouslySetInnerHTML={{ __html: currentPageContent.content }} />
              </div>
            )}
          </div>
          
          {/* Page Navigation Controls */}
          <div className="page-controls">
            <button 
              className="page-nav-btn prev-btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            
            <div className="page-indicator">
              <span>{currentPage} / {pages.length}</span>
            </div>
            
            <button 
              className="page-nav-btn next-btn"
              onClick={handleNextPage}
              disabled={currentPage === pages.length}
            >
              Next
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}