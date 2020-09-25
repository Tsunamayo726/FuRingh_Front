import React from "react";
import "../css/comment.css"
export default class Layout extends React.Component {
  render() {
    return (
        <div>
            <h1>Post</h1><br/>
            <form>
                <input type="text" className="text-box" />
            </form>
        </div>
    );
  }
}