import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Header.css"


function Header() {

  function logout() {
    localStorage.clear();
    var logi = alert("logged out Successfully");
    window.location.href = '/Login';
}
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avator" alt="vijai"></Avatar>
      </div>
      <div className="header__name">
          <h1>QuizPro</h1>
      </div>
      <div className="header__right">
        <Button size="small" onClick={logout} variant="contained" color="secondary" className="header__button">Logout</Button>
      </div>
    </div>
  );
}

export default Header;
