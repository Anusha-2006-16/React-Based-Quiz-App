import React, { useEffect, useState } from 'react'
import quizCSS from'./Quiz.css'
export default function QuizList({question,answer,options,handleClick,currAnswer}) {
    const[bcg,setBcg]=useState("");
   
  return (
    <div>
      <h2>{question}</h2>
   
      <ul>
        {options.map((option,idx)=>(
              <li
            key={idx}
            className={currAnswer === option ? 'selected' : ''}
            style={
              currAnswer === option
                ? option === answer
                  ? { backgroundColor: 'green', color: 'white' } // correct selected
                  : { backgroundColor: 'red', color: 'white' }   // wrong selected
                : {}
            }
            onClick={() => handleClick(option)}
          >{option}</li>
        ))}
      </ul>
    </div>
  )
}
