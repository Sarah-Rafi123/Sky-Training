import { useState } from 'react'
import './ResultsScreen.css'

export default function ResultsScreen({ result, onRetakeTest, onBackToCourses, onBackToDashboard }) {
  const [showDetailedResults, setShowDetailedResults] = useState(false)
  
  const getGrade = (score) => {
    if (score >= 90) return { grade: 'A+', color: '#10b981' }
    if (score >= 80) return { grade: 'A', color: '#10b981' }
    if (score >= 70) return { grade: 'B', color: '#f59e0b' }
    if (score >= 60) return { grade: 'C', color: '#f59e0b' }
    if (score >= 50) return { grade: 'D', color: '#ef4444' }
    return { grade: 'F', color: '#ef4444' }
  }

  const getScoreMessage = (score) => {
    if (score >= 80) return "Excellent work! You've mastered the material."
    if (score >= 70) return "Well done! You've passed the assessment."
    if (score >= 60) return "Good effort! Consider reviewing some topics."
    return "You may want to review the course materials and try again."
  }

  const isPassed = result.score >= 70
  const gradeInfo = getGrade(result.score)

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="header-buttons">
          <button onClick={onBackToCourses} className="back-btn">← Back to Courses</button>
          <button onClick={onBackToDashboard} className="dashboard-btn">Dashboard</button>
        </div>
        <h1>Test Results</h1>
      </div>

      <div className="results-content">
        <div className="results-card">
          <div className="score-section">
            <div className="score-circle" style={{ borderColor: gradeInfo.color }}>
              <div className="score-value" style={{ color: gradeInfo.color }}>
                {result.score}%
              </div>
              <div className="grade-badge" style={{ backgroundColor: gradeInfo.color }}>
                {gradeInfo.grade}
              </div>
            </div>
            
            <div className="status-badge" style={{ 
              backgroundColor: isPassed ? '#10b981' : '#ef4444' 
            }}>
              {isPassed ? '✓ PASSED' : '✗ FAILED'}
            </div>
          </div>

          <div className="course-info">
            <h2>{result.courseTitle}</h2>
            <p className="score-message">{getScoreMessage(result.score)}</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Score</div>
              <div className="stat-value">{result.score}%</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Correct Answers</div>
              <div className="stat-value">{result.correctAnswers}/{result.totalQuestions}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Time Taken</div>
              <div className="stat-value">{result.timeTaken}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Passing Score</div>
              <div className="stat-value">70%</div>
            </div>
          </div>

          <div className="progress-breakdown">
            <h3>Performance Breakdown</h3>
            <div className="performance-bar">
              <div className="performance-sections">
                <div 
                  className="correct-section" 
                  style={{ 
                    width: `${(result.correctAnswers / result.totalQuestions) * 100}%`,
                    backgroundColor: '#10b981'
                  }}
                ></div>
                <div 
                  className="incorrect-section" 
                  style={{ 
                    width: `${((result.totalQuestions - result.correctAnswers) / result.totalQuestions) * 100}%`,
                    backgroundColor: '#ef4444'
                  }}
                ></div>
              </div>
            </div>
            <div className="performance-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
                <span>Correct ({result.correctAnswers})</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#ef4444' }}></div>
                <span>Incorrect ({result.totalQuestions - result.correctAnswers})</span>
              </div>
            </div>
          </div>

          {!isPassed && (
            <div className="improvement-tips">
              <h3>📚 Study Recommendations</h3>
              <ul>
                <li>Review the course materials thoroughly</li>
                <li>Focus on areas where you had incorrect answers</li>
                <li>Practice with additional exercises</li>
                <li>Consider seeking help from instructors</li>
              </ul>
            </div>
          )}

          {isPassed && (
            <div className="achievement-section">
              <div className="achievement-badge">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-text">
                  <h3>Congratulations!</h3>
                  <p>You have successfully completed the assessment</p>
                </div>
              </div>
            </div>
          )}

          <div className="certificate-section">
            <h3>📜 Certificate</h3>
            {isPassed ? (
              <div className="certificate-available">
                <p>Your certificate is ready for download!</p>
                <button className="download-cert-btn">
                  Download Certificate
                </button>
              </div>
            ) : (
              <div className="certificate-unavailable">
                <p>Complete the assessment with a passing score to earn your certificate.</p>
              </div>
            )}
          </div>

          <div className="action-buttons">
            <button onClick={onRetakeTest} className="retake-btn">
              {isPassed ? 'Retake Test' : 'Try Again'}
            </button>
            <button 
              onClick={() => setShowDetailedResults(!showDetailedResults)} 
              className="details-btn"
            >
              {showDetailedResults ? 'Hide Details' : 'View Details'}
            </button>
          </div>

          {showDetailedResults && (
            <div className="detailed-results">
              <h3>Detailed Analysis</h3>
              <div className="analysis-grid">
                <div className="analysis-item">
                  <div className="analysis-label">Accuracy Rate</div>
                  <div className="analysis-value">
                    {Math.round((result.correctAnswers / result.totalQuestions) * 100)}%
                  </div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Questions Missed</div>
                  <div className="analysis-value">
                    {result.totalQuestions - result.correctAnswers}
                  </div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Grade Level</div>
                  <div className="analysis-value">{gradeInfo.grade}</div>
                </div>
                <div className="analysis-item">
                  <div className="analysis-label">Status</div>
                  <div className="analysis-value">
                    {isPassed ? 'Certified' : 'Needs Review'}
                  </div>
                </div>
              </div>
              
              <div className="next-steps">
                <h4>Next Steps:</h4>
                {isPassed ? (
                  <ul>
                    <li>Download your certificate</li>
                    <li>Add this qualification to your profile</li>
                    <li>Explore advanced courses in this subject</li>
                    <li>Share your achievement on social media</li>
                  </ul>
                ) : (
                  <ul>
                    <li>Review course materials</li>
                    <li>Take practice tests</li>
                    <li>Schedule a retake when ready</li>
                    <li>Contact support for additional help</li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}