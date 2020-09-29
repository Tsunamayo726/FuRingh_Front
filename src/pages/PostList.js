import React from "react";
import api from "../api/apiCon";
import { For } from 'react-loops'
import PostComponent from "../components/PostComponent";
import "./TimeLine.css"

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    console.log("PostList")
    this.state = {
      post_list:null,
    }
  }


   componentDidMount(){
    api.get_my_post_list(1).then((result)=>{
      const post_list =  result.map(async (post) => {

        const user = await api.get_user_info(post.user_id);
        post.name = user[0].name;

        return  result;

      });

      Promise.all(post_list).then(result=>{
        console.log(result);
        this.setState({
          post_list:result[0],
        });
      })

    });
  }

  render() {
    console.log(this.state.post_list);
    return (
      <div className="postlist">
        <For of={this.state.post_list}>{item =>
        <PostComponent comment={item.text} username={item.name}  itemname={item.item_name}
        price={item.item_price} quantity={item.item_quantity} 
        icon="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        }</For>
      </div>
    );
  }
}
