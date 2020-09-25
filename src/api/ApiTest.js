import React from "react";
import apiCon from "./apiCon";
export default class Layout extends React.Component {
  render() {
    const api = new apiCon("http://localhost:8000");
    // api.get_timeline().then(result=>console.log(result));
    api.reply(1,2,"フロントの方からリプライ");
    console.log("test");
    return (
      <div>
      </div>
    );
    
  }
}