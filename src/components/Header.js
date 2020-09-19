import React from "react";
import {Link} from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
        <div>
            <Link to="/">TimeLine</Link>
            <Link to="ShopList">ShopList</Link>
            <Link to="/EditProfile">EditProfile</Link>
            <Link to="/RegisterUser">RegisterUser</Link>
        </div>
    );
  }
}
