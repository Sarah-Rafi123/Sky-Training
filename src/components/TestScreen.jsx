import { useState, useEffect } from 'react'
import testData from '../data/TestData'
import './TestScreen.css'

export default function TestScreen({ courseTitle, onBack, onTestComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [testStarted, setTestStarted] = useState(false)

  const test = testData[courseTitle]
  
  useEffect(() => {
    if (test && testStarted) {
      const totalMinutes = parseInt(test.duration.match(/\d+/)[0])
      setTimeLeft(totalMinutes * 60)
    }
  }, [test, testStarted])

  useEffect(() => {
    if (timeLeft > 0 && testStarted) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && testStarted) {
      handleSubmitTest()
    }
  }, [timeLeft, testStarted])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitTest = () => {
    let correctAnswers = 0
    test.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct) {
        correctAnswers++
      }
    })
    
    const score = Math.round((correctAnswers / test.questions.length) * 100)
    onTestComplete({
      score,
      correctAnswers,
      totalQuestions: test.questions.length,
      courseTitle,
      timeTaken: formatTime((parseInt(test.duration.match(/\d+/)[0]) * 60) - timeLeft)
    })
  }

  const handleStartTest = () => {
    setTestStarted(true)
  }

  if (!test) {
    return (
      <div className="test-container">
        <div className="test-header">
          <button onClick={onBack} className="back-btn">← Back to Courses</button>
          <h1>Test Not Available</h1>
        </div>
        <div className="test-content">
          <p>Sorry, no test is available for this course yet.</p>
        </div>
      </div>
    )
  }

  if (!testStarted) {
    return (
      <div className="test-container">
        <div className="test-header">
          <button onClick={onBack} className="back-btn">← Back to Courses</button>
          <h1>{test.title}</h1>
        </div>
        <div className="test-intro">
          <div className="test-info-card">
            <h2>Test Instructions</h2>
            <p className="test-description">{test.description}</p>
            
            <div className="test-details">
              <div className="detail-item">
                <strong>Duration:</strong> {test.duration}
              </div>
              <div className="detail-item">
                <strong>Questions:</strong> {test.questions.length}
              </div>
              <div className="detail-item">
                <strong>Passing Score:</strong> 70%
              </div>
            </div>

            <div className="test-rules">
              <h3>Important Rules:</h3>
              <ul>
                <li>You cannot pause the test once started</li>
                <li>Each question must be answered to proceed</li>
                <li>You can review and change answers before submitting</li>
                <li>The test will auto-submit when time expires</li>
              </ul>
            </div>

            <button onClick={handleStartTest} className="start-test-btn">
              Start Test
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = test.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / test.questions.length) * 100

  return (
    <div className="test-container">
      <div className="test-header">
        <button onClick={onBack} className="back-btn">← Exit Test</button>
        <h1>{test.title}</h1>
        <div className="test-timer">
          Time Left: {formatTime(timeLeft)}
        </div>
      </div>

      <div className="test-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="progress-text">
          Question {currentQuestion + 1} of {test.questions.length}
        </span>
      </div>

      <div className="test-content">
        <div className="question-card">
          <h2>Question {currentQuestion + 1}</h2>
          <p className="question-text">{currentQ.question}</p>
          
          <div className="answers-list">
            {currentQ.options.map((option, index) => (
              <label key={index} className="answer-option">
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={index}
                  checked={selectedAnswers[currentQ.id] === index}
                  onChange={() => handleAnswerSelect(currentQ.id, index)}
                />
                <span className="answer-text">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="test-navigation">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="nav-btn prev-btn"
          >
            Previous
          </button>
          
          {currentQuestion === test.questions.length - 1 ? (
            <button onClick={handleSubmitTest} className="nav-btn submit-btn">
              Submit Test
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQ.id] === undefined}
              className="nav-btn next-btn"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="question-overview">
        <h3>Question Overview</h3>
        <div className="question-grid">
          {test.questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`question-num ${
                selectedAnswers[q.id] !== undefined ? 'answered' : ''
              } ${index === currentQuestion ? 'current' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}