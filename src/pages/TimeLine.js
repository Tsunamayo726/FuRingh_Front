import React from "react";
import PostComponent from "./PostComponent";
import "./TimeLine.css"

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    console.log("Timeline")
  }

  render() {
    return (
      <div className="timeline">
        <PostComponent
          username="@sorana_toki_334"
          icon="Icon"
          itemname="あたしンちグラグラゲーム"
          quantity="1"
          price="1103354300000000"
          comment="少し傷んでいますが品質に問題はありません"
        />
      </div>
    );
  }
}
