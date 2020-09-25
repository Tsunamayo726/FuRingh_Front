import React from "react";
import PostComponent from "./PostComponent";
import "./TimeLine.css"

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props)
    console.log("Timeline")
  }

  render() {
    return (<div className="timeline">
      <PostComponent
        username="sagi"
        text="TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT,
TEXTTEXTTEXTTEXTTEXTTEXT,
TEXTTEXTTEXTTEXT."
/>
    </div>);
  }
}
