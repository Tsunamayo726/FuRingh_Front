import React, { Component } from "react";
import "./Post.css"

export default class Post extends Component {
  submit(e) {
    console.log("Submit form")
    return true
  }

  render() {
    return (
      <div className="Post">
        <h1>Post</h1>
        <form
          onSubmit={this.submit}
          >
          <table>
              <tr className="itemname">
                <th>品目</th>
                <th><input required type="text" name="itemname" /></th>
              </tr>
              <tr className="row">
                <th>数量</th>
                <th><input required type="number" min="1" name="quantity" /></th>
              </tr>
              <tr className="row">
                <th>価格</th>
                <th><input required type="number" min="1" name="price" /></th>
              </tr>
          </table>
          <textarea required className="textarea" placeholder="コメント"></textarea>
          <br/>
          <input type="submit" value="投稿" />
        </form>
      </div>
    );
  }
}
