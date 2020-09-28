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
      price: "価格",
      comment: "コメント"
    }
    */
    super(props)
    this.state = {
      username: props.username,
      icon: props.icon, // アイコン画像のURL
      itemname: props.itemname,
      quantity: props.quantity,
      price: props.price,
      comment: props.comment,
      replyBoxClassName: "replyBox",
      replyStatus: ""
    }
  }

  render() {
    return (<div className="PostComponent">
      <div className="upper">
        <img src={this.state.icon} className="icon" alt={this.state.username + "'s icon"}/>
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
              <td>{this.state.price}
                円</td>
            </tr>
            <tr>
              <th>コメント：</th>
            </tr>
            <tr>
              <td colspan="2">{this.state.comment}</td>
            </tr>
            <tr>
              <td colspan="2">
                <div className="replybutton" onMouseDown={(e) => {
                    e.target.className += " mousedown"
                  }} onMouseOver={(e) => {
                    e.target.className += " mouseover"
                  }} onMouseOut={(e) => {
                    e.target.className = e.target.className.replace(" mouseover", "")
                  }} onMouseUp={(e) => {
                    e.target.className = e.target.className.replace(" mousedown", "")
                    if (this.state.replyBoxClassName.match(/ show/)) {
                      this.setState({
                        replyBoxClassName: this.state.replyBoxClassName.replace(" show", "")
                      })
                    } else {
                      this.setState({
                        replyBoxClassName: this.state.replyBoxClassName + " show"
                      })
                    }
                  }}>
                  <img src="https://icon-icons.com/downloadimage.php?id=125173&amp;root=2066/SVG/&amp;file=reply_icon_125173.svg" width="20"/>
                  コメント
                </div>
              </td>
            </tr>
          </table>
          <div className={this.state.replyBoxClassName}>
            <form onSubmit={(e) => {
                const userid = "xydcftjyvgkuhblnijkoulgiykufjyc"
                const postid = "UILGYFKTUGVJHLBKNJUIGHYL"
                const data = {
                  user_id: userid,
                  post_id: postid,
                  comment: e.target.comment.value
                }
                // "/api/v1/post/reply"
                fetch("/api/v1/post/reply", {
                  method: "POST",
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                }).then(response => response.json())
                .then(data => {
                  console.log(data)
                  this.setState({
                    replyStatus: "Successfly reply sent."
                  })
                })
                .catch(console.error)
                return false
              }}>
              <input type="text" name="comment" placeholder="Comment hr"/>
              <input type="submit" value="Comment"/>
              <input type="button" value="X" onClick={() => {
                  this.setState({
                    replyBoxClassName: this.state.replyBoxClassName.replace(" show", "")
                  })
                }}/>
            </form>
            <div className="replyStatus">{this.state.replyStatus}</div>
          </div>
        </div>
      </div>
    </div>);
  }
}
