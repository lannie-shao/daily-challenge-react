import React, { useEffect, useState } from 'react'

const ScoreKeeper = () => {
  const [score,setScore]=useState(
    parseInt(localStorage.getItem('score'))||0);

  useEffect(()=>{
    localStorage.setItem=('score',score)
  },[score])

  return (
    <div>
    <h2>Your score is: {score}</h2>
    <button type='button' onClick={()=>setScore(score+1)}>+</button>
    <button type='button' onClick={()=>setScore(score-1)}>-</button>
    </div>
  )
}

export default ScoreKeeper