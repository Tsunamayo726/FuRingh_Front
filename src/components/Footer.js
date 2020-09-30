import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css"

export default class Layout extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <h1>FuRingh</h1>
          <h2>©2020 noplannoideanosense</h2>
        </div>
        <div className="footer-right">
          <div className="footer-system">
            <div className="footer-system-top">
              <Link to="/">タイムライン</Link>
              <a href="/shoplist.html">お店一覧</a><br/>
            </div>
            <div className="footer-system-under">
              <a href="/login">ログイン</a>
              <a href="/login/register.html">新規登録</a>
            </div>
          </div>
          <div className="footer-list">
            <a href="/">利用規約</a>
            <a href="/">プライバシーポリシー</a>
            <a href="/">お問い合わせ</a>
          </div>
        </div>
      </div>

    )
  }
}
