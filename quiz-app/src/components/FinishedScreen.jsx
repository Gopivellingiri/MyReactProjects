import React from 'react'

const FinishedScreen = ({points, maxPossiblePoints, highscore, dispatch}) => {
    const percentage = (points / maxPossiblePoints) * 100

    let emoji;
    if (percentage === 100) emoji = '💯'; 
    else if (percentage >= 80) emoji = '🥳'; 
    else if (percentage >= 50) emoji = '😀';
    else emoji = '🤔';
        
  return (
    <>
    <p className='result'>
        <span>{emoji}</span>You scroed <strong>{points}</strong> out of {maxPossiblePoints}({Math.ceil(percentage)}%)</p>
    <p className="highscore">Highscore: {highscore}</p>
    <button className="btn btn-ul margin-left" onClick={()=> dispatch({type: "restart"})}>
          Restart Quiz
      </button>
    </>
  )

  
}

export default FinishedScreen