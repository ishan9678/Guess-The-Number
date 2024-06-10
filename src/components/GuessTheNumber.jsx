// src/components/GuessTheNumber.js
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Confetti from "react-confetti";
import "../App.css";

const steps = [
  "Think of any number",
  "Multiply the number by 2",
  "Add 8 to the result",
  "Divide the result by 2",
  "Subtract the original number you thought of from the result",
];

const GuessTheNumber = () => {
  const [step, setStep] = useState(0);
  const [finalResult, setFinalResult] = useState(null);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      const result = 4;
      setFinalResult(result);
    }
  };

  return (
    <div className="container">
      <h1>Guess The Number</h1>
      <TransitionGroup>
        {finalResult === null ? (
          <CSSTransition key={step} timeout={500} classNames="fade">
            <p className="instruction">{steps[step]}</p>
          </CSSTransition>
        ) : (
          <CSSTransition key="result" timeout={500} classNames="fade">
            <p className="instruction">
              The number you are thinking of is: {finalResult}
            </p>
          </CSSTransition>
        )}
      </TransitionGroup>
      {finalResult === null ? (
        <button className="next-button" onClick={nextStep}>
          Next
        </button>
      ) : (
        <button
          className="restart-button"
          onClick={() => {
            setStep(0);
            setFinalResult(null);
          }}
        >
          <Confetti />
          Restart
        </button>
      )}
    </div>
  );
};

export default GuessTheNumber;
