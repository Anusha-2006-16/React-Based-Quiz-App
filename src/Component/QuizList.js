import React from 'react'
import quizCSS from'./Quiz.css'
export default function QuizList({question,answer,options,handleClick,currAnswer}) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option,idx)=>(
            <li key={idx} className={currAnswer === option ?'selected':''} onClick={()=>handleClick(option)}>{option}</li>
        ))}
      </ul>
    </div>
  )
}
