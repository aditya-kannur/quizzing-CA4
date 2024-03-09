import React from 'react';
import './Result.css'

function Result(props) {

  // Retrieve props
  const { answer, restart, toggleState } = props;

  // Calculate percentage
  const percentage = (answer * 100) / 5;

  // Conditional text color style
  const textColorStyle = {
    color: toggleState ? 'white' : 'black'
  };

  return (
    <div className='result-container'>
      <h2 className='result' style={textColorStyle}>Final Result</h2>
      <p className='result-counter' style={textColorStyle}>{answer} out of 5 correct - ({percentage}%)</p>
      <button className='restart-button' onClick={restart} >Restart Game</button>
    </div>
  );
}

export default Result;
