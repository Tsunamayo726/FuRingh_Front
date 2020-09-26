import React from "react";
import api from "../api/apiCon";
import { For } from 'react-loops'
import PostComponent from "../components/PostComponent";
import "./TimeLine.css"

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    console.log("Timeline")
    this.state = {
      post_list:null,
    }
  }


   componentDidMount(){
    api.get_timeline().then((result)=>{
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
    <div className="timeline">
      <ul>
        <For of={this.state.post_list}>{item => 
            <PostComponent comment={item.text} username={item.name}  itemname={item.itam_name}
             price={item.item_price} quantity={item.item_quantity}/>
        }</For>
      </ul> 
    </div>);
  }
}
