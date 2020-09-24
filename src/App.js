import {HashRouter as Router, Route} from "react-router-dom";
import React from 'react';
import './App.css';

import Layout from "./pages/Layout";
import TimeLine from "./pages/TimeLine";
import EditProfile from "./pages/EditProfile";
import ShopList from "./pages/ShopList";
import LoginRegister from "./pages/LoginRegister"
import Post from "./pages/Post"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={TimeLine}></Route>
          <Route path="/Post" component={Post}></Route>
          <Route path="/EditProfile" component={EditProfile}></Route>
          <Route path="/ShopList" component={ShopList}></Route>
          <Route path="/Login" component={() => <LoginRegister feature="login" />}></Route>
          <Route path="/Register" component={() => <LoginRegister feature="register" />}></Route>
        </Layout>
      </Router>
    );
  }
}
