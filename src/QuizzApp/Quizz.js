import React, { useState, useEffect } from 'react';
import './Quizz.css';
import questions from './QuizzData.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    restartQuiz();
  }, []); 

  return (
    <div className='app'>
      {showScore ? (
        <div className='result-section'>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className='question-section'>
          <h5>Score: {score}</h5>
          <div className='question-count'>
            <span>Question {currentQuestion + 1} of {questions.length}</span>
          </div>
          <div className='question-text'>{questions[currentQuestion].question}</div>
        </div>
      )}
      <div className='answer-section'>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
