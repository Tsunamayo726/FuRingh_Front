import React from "react";
import PostComponent from "./PostComponent";
import "./TimeLine.css"

export default class TimeLine extends React.Component {
  render() {
    return (
      <div className="timeline">
        <h1>Timeline</h1>
<PostComponent
  username="sagi"
  text="TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT,
TEXTTEXTTEXTTEXTTEXTTEXT,
TEXTTEXTTEXTTEXT."
/>
      </div>
    );
  }
}
