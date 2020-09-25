import React from "react";
import {Link} from "react-router-dom";
<<<<<<< HEAD
import "../css/timeline.css"
export default class Layout extends React.Component {
  render() {
    return (
           <div class="header-list">
                <li href="./timeline.html">タイムライン</li>
                <li>お店一覧</li>    
                <li>@username</li>
                <li>設定</li>
                <li>ログアウト</li>  
            </div>
=======
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
>>>>>>> api-func
    );
  }
}
