import React, { useState } from 'react';
import questions from "../questions";
import Result from "./Result";
import logo from '../logo.png';

export default function QuestionBox() {
  const [question, setQuestion] = useState(0); // To store questions
  const [answer, setAnswer] = useState(0);  //  To store correct answers
  const [highlight, setHighlight] = useState(false);  // To highlight and unhighlight question
  const [toggle, setToggle] = useState(true);  // To toggle theme

  // Restart Quiz function
  const Restart = () => {
    setQuestion(0);
    setAnswer(0);
  };

  // Apply highlight function
  const applyHighlight = () => {
    setHighlight(true);
  };

  // Remove highlight function
  const removeHighlight = () => {
    setHighlight(false);
  };

  // Change Question color object
  const ChangeColor = {
    color: highlight ? "red" : "blue",
  };

  // Toggle theme object
  const ToggleTheme = {
    backgroundColor: toggle ? "darkgrey" : "white",
    height: "100vh",
  };
 
  // Toggle classname to change toggle button color
  const toggleButtonClass = toggle ? 'toggle-button-light-theme' : 'toggle-button-dark-theme';

  // Toggle, toggle button color
  const ToggleButtonTheme = () => {
    setToggle((prevToggle) => !prevToggle);
  };


  // Return
  return (
    <>
      <div style={ToggleTheme}>
        
      {/*  Header container  */}
        <header className="header-container">
          <img className='logo-image'  src={logo} alt="logo" />
          <button className={toggleButtonClass} onClick={ToggleButtonTheme}>
            {toggle ? "light" : "dark"}
          </button>
        </header>

        {/* Question container */}
        <div >
          {question < 5 ? (
            <div className="question-container"  >

              {/* Display question number */}
              <div className='question-number' style={{ color: toggle ? 'white' : 'black' }}>Question {question + 1} of 5</div>

              {/* display question */}
              <div style={ChangeColor} className="question" >{questions[question].text}</div>

              {/* Display options */}
              <div className="options-container">
                {questions[question].options.map((ele, i) => (
                  <div key={ele.id}>

                    {/* Check correvt answer */}
                    <div className="options" onClick={() => {
                      setQuestion(question + 1);
                      if (ele.isCorrect) {
                        setAnswer(answer + 1);
                      }
                    }} style={{ color: toggle ? 'white' : 'black' }}>{ele.text}</div>

                  </div>
                ))}
              </div>
              
              {/* Activate buttons */}
              <div className='button-conatiner'>
                <button className='highlight-button' onClick={applyHighlight}>Highlight</button>
                <button className='remove-highlight-button' onClick={removeHighlight}>Remove Highlight</button>
              </div>

            </div>
          )
           : 

          //  Pass props to Result component
           (
              <Result answer={answer} restart={Restart} toggleState={toggle}  />
            )}
        </div>
      </div>
    </>
  );
}
