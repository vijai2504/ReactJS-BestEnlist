import { Button } from '@material-ui/core';
import React from 'react';
import "./Start.css";

const Start = ({ onQuizStart }) => {
  return(
    <div className="start">
      <div className="start__container">
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          <Button className="" onClick={onQuizStart}>Start</Button>
      </div>
    </div>
  );
}

export default Start;