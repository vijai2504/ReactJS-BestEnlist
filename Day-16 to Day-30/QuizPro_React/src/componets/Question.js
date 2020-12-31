import { Button } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import "./Question.css";

const Question = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep,}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector(
      "input:checked"
    );
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="que">
      <div className="quiz__b">
        <h2>{data.question}</h2>
      </div>
      <div className="quiz__c" ref={radiosWrapper}>
        {data.choices.map((choice, i) => (
          <label className="radio" key={i}>
            <input
              type="radio"
              name="answer"
              value={choice}
              onChange={changeHandler}
            />
            {choice}
          </label>
        ))}
      </div>
      <div className="quiz__c">
        {error && <div className="has-text-danger">{error}</div>}
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
          onClick={nextClickHandler}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Question;
