import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

export default class Layout extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="left">
          <Link to="/">
              TimeLine
          </Link>
          <Link to="Post">
              Post
          </Link>
          <Link to="ShopList">
              ShopList
          </Link>
          <Link to="/EditProfile">
              EditProfile
          </Link>
        </div>
        <div className="right">
          <Link to="/Login">
              Login
          </Link>
          <Link to="/Register">
              Register
          </Link>
        </div>
      </div>
    );
  }
}
