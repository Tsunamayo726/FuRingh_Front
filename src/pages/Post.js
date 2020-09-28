import React, { Component } from "react";
import "./Post.css"

export default class Post extends Component {
  submit(e) {
    console.log("Submit form")
    console.log(e.target.itemname.value);
    console.log(e.target.quantity.value);
    console.log(e.target.price.value);
    // console.log(e.target.textarea.value);

    return false
  }

  render() {
    return (
      <div className="Post">
        <h1>Post</h1>
        <form
          onSubmit={this.submit}
          >
          <table>
            <tbody>
              <tr className="itemname">
                <th>品目</th>
                <th><input required type="text" name="itemname" /></th>
              </tr>
              <tr className="quantity">
                <th>数量</th>
                <th><input required type="number" min="1" name="quantity" /></th>
              </tr>
              <tr className="price">
                <th>価格</th>
                <th><input required type="number" min="1" name="price" /></th>
              </tr>
            </tbody>
          </table>
          <textarea required className="textarea"  placeholder="コメント"></textarea>
          <br/>
          <input type="submit" value="投稿" />
        </form>
      </div>
    );
  }
}
