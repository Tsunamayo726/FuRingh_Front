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
        this.setState({shop_or_customer: json.shop_or_customer})
        if (json.shop_or_customer === "shop") {
          window.location.hash = "#PostList"
        } else {
          window.location.hash = "#TimeLine"
        }
      })
  }

  render() {
    return (<div>Please wait ...</div>)
  }
}
