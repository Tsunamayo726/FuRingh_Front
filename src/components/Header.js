import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "@______"
    }
    fetch("/api/v1/user/getmyinfo")
    .then(response => response.json())
    .then(json => {
      console.log(json.name)
      this.setState({username: json.name})
    })
  }
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Service Logo" />
          </Link>
        </div>
        <nav class="header-list">
          <ul class="nav">
            <li>
              <Link to="/">タイムライン</Link>
            </li>
            <li>
              <a href="profile.html">@{this.state.username}</a>
            </li>
            <li>
              <a
                onClick={()=>{
                  fetch("/api/v1/user/logout").then((response)=>{
                    console.log("Logout")
                    window.location.pathname = "/login"
                  })
                  return false
                }}
                href="#">ログアウト</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
