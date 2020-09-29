import React from "react";
import "./PostComponent.css"
import api from "../api/apiCon";
import {For} from "react-loops";

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
      replyStatus: "",
      post_id:props.post_id,
      reply_list:null,
    }
  }

  replyComponent(props){
    return (
      <div className="reply">
        <div className="username">@{props.username}</div>
        <div className="commenttext">{props.comment}</div>
      </div>
    )
  }

  componentDidMount(){

    api.get_reply(this.state.post_id).then(result=>{
      const reply_list =  result.map(async (reply) => {
        const user = await api.get_user_info(reply.user_id);
        reply.name = user[0].name;
        return  reply;
      });

      Promise.all(reply_list).then(result=>{
        this.setState({
          reply_list:result,
        });
      })
    });
  }
  render() {
    console.log(this.state.reply_list);
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
                const userid = "1"
                const postid = this.state.post_id;
                const data = {
                  user_id: userid,
                  post_id: postid,
                  comment: e.target.comment.value
                }
                // "/api/v1/post/reply"
                api.reply(userid,postid,e.target.comment.value);
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

          <div className="replyList">
            <For of={this.state.reply_list}>{item =>
              <this.replyComponent
              username={item.name}
              comment={item.text}
             />
            }
           </For> 
          </div>
        </div>
      </div>
    </div>);
  }
}
