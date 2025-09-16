import React, { useState } from 'react'
import quizCSS from'./Quiz.css'
import QuizList from './QuizList';
import { useEffect } from 'react';
export default function Quiz() {
 
    const questions = [
  {
    question: "What is React?",
    options: ["CSS framework", "React Library", "React Framework", "Testing tool"],
    answer: "React Library"
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    answer: "useState"
  },
  {
    question: "JSX in React stands for?",
    options: ["JavaScript XML", "Java Syntax Extension", "Java Standard eXpression", "JSON XML"],
    answer: "JavaScript XML"
  },
  {
    question: "Which method is used to render React elements to the DOM?",
    options: ["ReactDOM.create()", "ReactDOM.render()", "React.render()", "renderDOM()"],
    answer: "ReactDOM.render()"
  },
  {
    question: "In React, what is used to pass data to child components?",
    options: ["setState", "props", "context", "state"],
    answer: "props"
  },
  {
    question: "Which hook is used to handle side effects in React?",
    options: ["useState", "useEffect", "useMemo", "useReducer"],
    answer: "useEffect"
  },
  {
    question: "What does Virtual DOM in React improve?",
    options: ["Security", "Performance", "Styling", "Testing"],
    answer: "Performance"
  },
  {
    question: "Which of the following is NOT a React feature?",
    options: ["Component-based", "Virtual DOM", "One-way data binding", "Two-way binding by default"],
    answer: "Two-way binding by default"
  },
  {
    question: "Which of the following is true about React components?",
    options: ["They must be class components", "They return JSX", "They modify DOM directly", "They cannot have state"],
    answer: "They return JSX"
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook (Meta)", "Microsoft", "Amazon"],
    answer: "Facebook (Meta)"
  }
];
const[score,setScore]=useState(0);
const[currQuestionIndex,setCurrQuestionIndex]=useState(0);
const[currAnswer,setCurrentAnswer]=useState(null);
const handleClick=(option)=>{
    setCurrentAnswer(option);
}

 const handleRestart=()=>{
    setTimer(0);
    setCurrQuestionIndex(0);
    setCurrentAnswer(null);
    setScore(0);
 }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    if (timer >= 10) {
      handleNextButton()
    }

    return () => clearInterval(interval) // cleanup
  }, [timer])
 const handlePreviousButton=()=>{
setTimer(0);
    setCurrQuestionIndex(currQuestionIndex-1);
    setCurrentAnswer(null);
 }
 
  return (
    <div>
      
          {
            currQuestionIndex<questions.length ?   <QuizList question={questions[currQuestionIndex].question} handleClick={handleClick} 
            className={currAnswer === null ? '' :'selected'} currAnswer={currAnswer}
           answer={questions[currQuestionIndex].answer} options={questions[currQuestionIndex].options}/>:<>
            <h2>Your Score is {score} out of {questions.length} questions</h2>
            </>
          }
<button disabled={currQuestionIndex === 0 || currQuestionIndex===questions.length} onClick={handlePreviousButton}>Previous Question</button>
        <button disabled={currAnswer === null}   className={currAnswer===null ?'button-disabled':'button-enabled'} onClick={handleNextButton}>Next Question</button>
    <button style={{backgroundColor:"skyblue"}} onClick={handleRestart}>Restart</button>
    </div>
  )
}
 