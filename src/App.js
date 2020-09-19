import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./pages/Layout";
import TimeLine from "./pages/TimeLine";
import EditProfile from "./pages/EditProfile";
import RegisterUser from "./pages/RegisterUser";
import ShopList from "./pages/ShopList";

export default function () {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={TimeLine}></Route>
        <Route path="/EditProfile" component={EditProfile}></Route>
        <Route path="/RegisterUser" component={RegisterUser}></Route>
        <Route path="/ShopList" component={ShopList}></Route>
      </Layout>
    </Router>
  );
}
