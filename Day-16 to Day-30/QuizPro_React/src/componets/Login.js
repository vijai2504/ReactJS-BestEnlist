import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';
import { Redirect } from 'react-router-dom';


export default function Login() {
  const [state, dispatch] = useStateValue();
  const [inputad, setInputad] = useState([]);
  const [inputur, setInputur] = useState([]);

  function onSignInAdmin() {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    var number = inputad;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = window.prompt("Enter the otp", "");
        if (code === null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user);
            document.querySelector("label").textContent +=
              result.user.phoneNumber + "Number verified";
              var alet = window.alert("Successfully Logged in as Admin");
              dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function onSignInUser() {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    var number = inputur;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = window.prompt("Enter the otp", "");
        if (code === null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user);
            document.querySelector("p").textContent +=
              result.user.phoneNumber + " Number verified";
              var alet = window.alert("Successfully Logged in as User");
              dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function handleSubmitAd(e) {
    e.preventDefault();
    <Redirect to="/DashboardAd"/>;
}

function handleSubmitUr(e) {
  e.preventDefault();
  <Redirect to="/Dashboard"/>;
}

  return (
    <div className="login__page">
      <div className="head">
        <h1>QuizPro</h1>
      </div>
      <Grid className="login__1" container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className="Login__left">
            <h2 className="Admin__Name">For Admin</h2>
            <div className="left__in">
              <input placeholder="Full Name"></input>
            </div>
            <input
              value={inputad}
              onChange={(e) => setInputad(e.target.value)}
              id="numbers"
              placeholder="+919874561230"
            ></input>
            {".."}
            <Button onClick={onSignInAdmin} onSubmit={handleSubmitAd} variant="contained" color="primary">
              Send OTP
            </Button>
            <div id="recaptcha-container"></div>
            <label className="recap" style={{ color: "white" }}></label>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="Login__right">
            <h2 className="User__Name">For User</h2>
            <div className="left__in">
              <input placeholder="Full Name"></input>
            </div>
            <input
              value={inputur}
              onChange={(e) => setInputur(e.target.value)}
              placeholder="+919874561230"
            ></input>
            {".."}
            <Button onClick={onSignInUser} onSubmit={handleSubmitUr} variant="contained" color="primary">
              Send OTP
            </Button>
            <div id="recaptcha"></div>
            <p className="recap" style={{ color: "white" }}></p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
