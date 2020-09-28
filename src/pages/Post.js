import React, { Component } from "react";
import "./Post.css"
import api from "../api/apiCon";
export default class Post extends Component {
  submit(e) {
    console.log("Submit form")
    const item ={
      name:  e.target.itemname.value,
      quantity: e.target.quantity.value,
      price:  e.target.price.value,
    }
    const comment = e.target.post_textarea.value
    api.post(1,comment,item);
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
          <textarea required className="textarea" name="post_textarea" placeholder="コメント"></textarea>
          <br/>
          <input type="submit" value="投稿" />
        </form>
      </div>
    );
  }
}
