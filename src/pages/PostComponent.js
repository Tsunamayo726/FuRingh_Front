import React from "react";
import icon from "../content/testicon.png"
import "./PostComponent.css"

export default class PostComponent extends React.Component {
  constructor(props) {
    super(props)
    let user = props.username
    user[0]==="@"||(user="@"+user)
    this.state = {
      username: user,
      text: props.text,
    }
  }

  render() {
    return (
      <div className="PostComponent">
        <div className="upper">
          <img src={icon} className="icon" alt={this.state.username + "'s icon"} />
          <div className="username">{this.state.username}</div>
        </div>
        <div className="downer">
          <div className="text">
            {this.state.text}
          </div>
        </div>
      </div>
    );
  }
}
