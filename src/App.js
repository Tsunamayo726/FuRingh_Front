import ReactDOM from "react-dom";
import {HashRouter as Router, Route} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from "./pages/Layout";
import TimeLine from "./pages/TimeLine";
import EditProfile from "./pages/EditProfile";
import Register from "./pages/Register";
import ShopList from "./pages/ShopList";
import Login from "./pages/Login";
import LoginRegister from "./pages/LoginRegister"

export default function () {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={TimeLine}></Route>
        <Route path="/EditProfile" component={EditProfile}></Route>
        <Route path="/ShopList" component={ShopList}></Route>
        <Route path="/Login" component={() => <LoginRegister feature="login" />}></Route>
        <Route path="/Register" component={() => <LoginRegister feature="register" />}></Route>
      </Layout>
    </Router>
  );
}
