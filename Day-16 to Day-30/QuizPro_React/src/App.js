import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../src/componets/Header";
import Sidebar from "../src/componets/Sidebar";
import DashBoard from "../src/componets/DashBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardAd from "../src/componets/DashboardAd";
import Leaderboard from "../src/componets/Leaderboard";
import Login from "../src/componets/Login";
import SidebarAd from "../src/componets/SidebarAd";
import { useStateValue } from "./StateProvider";
import Start from "./componets/Start";
import Question from "./componets/Question";
import End from "./componets/End";
import Settings from "./componets/Settings";
import quizData from "./data/quiz.json";

let interval;

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <Router>
      <div className="App">
        {user ? (
          user.phoneNumber === "+917010842052" &&
          user.uid === "e4zyaILVh2YncYEnrw2PsibutgI2" ? (
            <>
              <Header />
              <div className="app__body">
                <SidebarAd />
                <Switch>
                  <Route path="/quiz/:quizId">
                    <div className="App">
                      {step === 1 && <Start onQuizStart={quizStartHandler} />}
                      {step === 2 && (
                        <Question
                          data={quizData.data[activeQuestion]}
                          onAnswerUpdate={setAnswers}
                          numberOfQuestions={quizData.data.length}
                          activeQuestion={activeQuestion}
                          onSetActiveQuestion={setActiveQuestion}
                          onSetStep={setStep}
                        />
                      )}
                      {step === 3 && (
                        <End
                          results={answers}
                          data={quizData.data}
                          onReset={resetClickHandler}
                          time={time}
                        />
                      )}
                    </div>
                  </Route>
                  <Route path="/Dashboard">
                    <DashboardAd />
                  </Route>
                  <Route path="/Leaderboard">
                    <Leaderboard />
                  </Route>
                  <Route path="/Settings">
                    <Settings />
                  </Route>
                </Switch>
              </div>
            </>
          ) : (
            <>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/quiz/:quizId">
                    <div className="App">
                      {step === 1 && <Start onQuizStart={quizStartHandler} />}
                      {step === 2 && (
                        <Question
                          data={quizData.data[activeQuestion]}
                          onAnswerUpdate={setAnswers}
                          numberOfQuestions={quizData.data.length}
                          activeQuestion={activeQuestion}
                          onSetActiveQuestion={setActiveQuestion}
                          onSetStep={setStep}
                        />
                      )}
                      {step === 3 && (
                        <End
                          results={answers}
                          data={quizData.data}
                          onReset={resetClickHandler}
                          time={time}
                        />
                      )}
                    </div>
                  </Route>
                  <Route path="/Dashboard">
                    <DashBoard />
                  </Route>
                  <Route path="/Leaderboard">
                    <Leaderboard />
                  </Route>
                  <Route path="/Settings">
                    <Settings />
                  </Route>
                </Switch>
              </div>
            </>
          )
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
