import React, { useEffect, useState } from 'react';
import "./End.css";
import { useHistory } from "react-router-dom";
import { formatTime } from '../utils';

const End = ({ results, data, onReset, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  let history = useHistory();

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  function handleClick() {
    history.push("/Leaderboard");
  }

  function onReset() {
    history.push("/Dashboard");
  }

  return(
    <div className="end">
      <div className="end-content">
          <h3>Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <button  onClick={handleClick}>Leaderboard</button>
          <button  onClick={onReset}>Finish</button>
      </div>
    </div>
  );
}

export default End;