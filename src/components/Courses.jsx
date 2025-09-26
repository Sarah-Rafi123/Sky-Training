import { useState } from 'react'
import courseData from '../data/CourseData'
import './Courses.css'

export default function Courses({ onBack }) {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [startIndex, setStartIndex] = useState(0)

  const categories = ["ALL", "SEG", "VTCT", "PERSONS", "PRO QUAL", "SQA", "ICQ"]
  
  // Get courses based on selected category
  const courses = courseData[activeCategory] || []
  
  // Number of cards to show at once
  const itemsPerPage = 4
  
  // Slice courses for current "page"
  const visibleCourses = courses.slice(startIndex, startIndex + itemsPerPage)

  // Navigation handlers
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage)
    }
  }

  const handleNext = () => {
    if (startIndex + itemsPerPage < courses.length) {
      setStartIndex(startIndex + itemsPerPage)
    }
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setStartIndex(0) // Reset to first page when category changes
  }

  return (
    <div className="courses-container">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        <svg className="back-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Dashboard
      </button>

      {/* Header */}
      <div className="courses-header">
        <p className="courses-subtitle">Our Courses</p>
        <h1 className="courses-title">Discover the Right Course for You</h1>
        <p className="courses-description">
          Enhance your skills with industry-recognized courses designed for your success.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="categories-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Navigation and Grid */}
      {courses.length > 0 ? (
        <div className="courses-nav-container">
          {/* Previous Button */}
          <button
            className="nav-button"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Courses Grid */}
          <div className="courses-grid">
            {visibleCourses.map((course) => (
              <div key={`${activeCategory}-${course.id}`} className="course-card">
                <img
                  src={course.img}
                  alt={course.title}
                  className="course-image"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop`
                  }}
                />
                <div className="course-content">
                  <div className="course-meta">
                    <div className="course-rating">
                      <span className="rating-star">★</span>
                      {course.rating}
                    </div>
                    <div className="course-price">
                      <span className="current-price">${course.price}</span>
                      <span className="old-price">${course.oldPrice}</span>
                    </div>
                  </div>
                  
                  <h3 className="course-title" title={course.title}>
                    {course.title}
                  </h3>
                  
                  <p className="course-description" title={course.desc}>
                    <svg className="course-description-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {course.desc}
                  </p>
                  
                  <button className="enroll-btn">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="nav-button"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= courses.length}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="empty-state">
          <h3>No courses available</h3>
          <p>There are currently no courses in the {activeCategory} category.</p>
        </div>
      )}

      {/* Pagination Info */}
      {courses.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#6b7280' }}>
          Showing {startIndex + 1} - {Math.min(startIndex + itemsPerPage, courses.length)} of {courses.length} courses
        </div>
      )}
    </div>
  )
}