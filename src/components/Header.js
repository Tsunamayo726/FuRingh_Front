import React from "react";
import {Link} from "react-router-dom";
import "../css/timeline.css"
export default class Layout extends React.Component {
  render() {
    return (
           <div class="header-list">
                <li href="./timeline.html">タイムライン</li>
                <li>お店一覧</li>    
                <li>@username</li>
                <li>設定</li>
                <li>ログアウト</li>  
            </div>
    );
  }
}
