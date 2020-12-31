import { Button } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useHistory } from "react-router-dom";
import "./Settings.css";

function Settings() {
  let history = useHistory();

  function handleClick() {
    history.push("/Dashboard");
  }

  return (
    <div className="set">
      <h2>Settings</h2>
      <div className="set__1">
        <h4>Username</h4>
        <input></input>
        <h4>Email-Id</h4>
        <input></input>
      </div>
      <div className="set__3">
        <h4>Connect Accounts</h4>
        <div className="set__3">
          <FacebookIcon />
          <input></input>
        </div>
        <div className="set__3">
          <TwitterIcon />
          <input></input>
        </div>
        <div className="set__3">
          {" "}
          <LinkedInIcon />
          <input></input>
        </div>
      </div>
      <div className="set__4">
        <Button onClick={handleClick}>Cancel</Button>
        <Button onClick={handleClick}>Save</Button>
      </div>
    </div>
  );
}

export default Settings;
