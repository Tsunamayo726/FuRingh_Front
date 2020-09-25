import React from "react";

export default class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.username_change = this.username_change.bind(this);
    this.password_change = this.password_change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (this.props.feature === "login") {
      this.name = "Login"
    } else {
      this.name = "Register"
    }
    console.log(this.name);
  }

  // 送信
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.feature === "login") {
      var url = '/api/v1/user/login';
    } else {
      var url = '/api/v1/user/register'
    }
    fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  username_change(e) {this.setState({username: e.target.value})}
  password_change(e) {this.setState({password: e.target.value})}

  render() {
    return (<div>
      <h1>{this.name}</h1>
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.username_change}
            value={this.state.username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.password_change}
            value={this.state.password}
          />
          <br/>
          <input type="submit" value={this.name}/>
        </form>
      </div>
    </div>);
  }
}
