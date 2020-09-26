import React from "react";
import Header from "../components/Header";
import api from "../api/apiCon";
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
