import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
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