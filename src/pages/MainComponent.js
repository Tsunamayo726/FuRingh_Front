import React from "react";
import TimeLine from "./TimeLine";
import PostList from "./PostList"

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    fetch("/api/v1/user/getmyinfo")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        // this.setState({username: json})
      })
  }

  render() {
    return <div></div>
  }
}
