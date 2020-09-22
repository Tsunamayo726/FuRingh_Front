import React from "react";
import "../css/timeline.css";
export default class TimeLine extends React.Component {
  render() {
    return (
        <div>
        <div class="header">
            <div class="header-icon">
                <p>FuRingh</p>
            </div>
        </div>
        <div class="post">
            <li class="user">
                <span class="icon">
                    <img src="./noimage.jpg" alt="icon" />
                </span>
                <span class="my-username">
                    <p>@username</p>
                </span>
            </li>
            <form name="post-form">
                <input class="textbox" type="text" name="text" value="" /><br/>
            </form>
            <input class="button"type="submit" name="button" value="投稿" />

        </div>
        </div>
    );
  }
}