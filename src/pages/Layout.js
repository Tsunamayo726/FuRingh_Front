import React from "react";
import Header from "../components/Header";
import Timeline from "./TimeLine";
export default class Layout extends React.Component {
  render() {
    return (
        <div>
            <Header />
            <Timeline/>
        </div>
    );
  }
}