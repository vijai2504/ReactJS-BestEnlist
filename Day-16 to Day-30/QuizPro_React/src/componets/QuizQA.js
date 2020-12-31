import React from "react";
import Button from "@material-ui/core/Button";
import "./QuizQA.css";

function QuizQA({ question, ans1, ans2, ans3, ans4 }) {
  return (
    <div className="container">
      <div className="quiz__b">
        <h2>{question}</h2>
      </div>
      <div className="quiz__c">
        <span>
          <Button variant="contained" color="primary">
            {ans1}
          </Button>
          <Button variant="contained" color="primary">
            {ans2}
          </Button>
        </span>
        <span>
          <Button variant="contained" color="primary">
            {ans3}
          </Button>
          <Button variant="contained" color="primary">
            {ans4}
          </Button>
        </span>
      </div>
    </div>
  );
}

export default QuizQA;
