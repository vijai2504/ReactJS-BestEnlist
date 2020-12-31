import React, { useState, useEffect } from "react";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import InfoIcon from "@material-ui/icons/Info";
import QuizQA from "./QuizQA";
import db from "../firebase";
import "./HtmlQuiz.css";
import { useParams } from "react-router-dom";

function HtmlQuiz() {
  const { quizId } = useParams();
  const [quizDetails, setquizDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (quizId) {
      db.collection("quiz")
        .doc(quizId)
        .onSnapshot((snapshot) => setquizDetails(snapshot.data()));
    }
    db.collection("quiz")
      .doc(quizId)
      .collection("quizcoll")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [quizId]);
  console.log(quizDetails);
  console.log("Message >>>", roomMessages);

  return (
    <div className="quiz">
      <div className="quiz__header">
        <div className="quiz__headerLeft">
          <h4 className="quiz__channelName">
            <strong>
              <GraphicEqIcon /> {quizDetails?.name}
            </strong>
          </h4>
        </div>
        <div className="quiz__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="quiz__a">
        {roomMessages.map(({question, ans1, ans2, ans3, ans4}) => (
          <QuizQA
            question={question}
            ans1={ans1}
            ans2={ans2}
            ans3={ans3}
            ans4={ans4}
          />
        ))}
      </div>
    </div>
  );
}

export default HtmlQuiz;
