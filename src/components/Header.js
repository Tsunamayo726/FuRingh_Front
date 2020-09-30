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
      console.log(json)
      this.setState({
        shop_or_customer: json.shop_or_customer,
        username: json.name,
        timelineName: "タイムライン"
      })
      if (json.shop_or_customer === "shop") {
        this.setState({
          postComp: (
            <li>
              <Link to="/Post">投稿</Link>
            </li>
          ),
          username: json.shop_name,
          timelineName: "投稿一覧"
        })
      }
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
              <Link to="/">{this.state.timelineName}</Link>
            </li>
            {this.state.postComp}
            <li>
              <a href="profile.html">@{this.state.username}</a>
            </li>
            <li>
              <a href="/#" onClick={()=>{
                  fetch("/api/v1/user/logout").then((response)=>{
                    console.log("Logout")
                    window.location.pathname = "/login"
                  })
                  return false
                }}>ログアウト</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
