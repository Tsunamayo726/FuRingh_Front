import React from "react";
import icon from "../content/testicon.png"
import "./PostComponent.css"

export default class PostComponent extends React.Component {
  constructor(props) {
    /*
    props
    {
      username: "ユーザー名",
      icon: "Icon", // feature
      itemname: "品目",
      quantity: "数量",
      price: "価格"
    }
    */
    super(props)
    this.state = props
  }

  render() {
    return (
      <div className="PostComponent">
        <div className="upper">
          <img src={icon} className="icon" alt={this.state.username + "'s icon"} />
          <div className="username">{this.state.username}</div>
        </div>
        <div className="downer">
          <div className="text">
            <table>
              <tr>
                <th>品目：</th>
                <td>{this.state.itemname}</td>
              </tr>
              <tr>
                <th>数量：</th>
                <td>{this.state.quantity}</td>
              </tr>
              <tr>
                <th>価格：</th>
                <td>{this.state.price} 円</td>
              </tr>
              <tr>
                <th>コメント：</th>
              </tr>
              <tr>
                <td colspan="2">{this.state.comment}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
