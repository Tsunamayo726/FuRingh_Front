import React, { Component } from "react";
import "./Post.css"

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      child: null,
      num: 0
    }
    this.addRow = this.addRow.bind(this);
  }

  submit(e) {
    console.log("Submit form")
    return true
  }

  tableRow(props) {
    return (
      <tr className={"row_" + props.num}>
        <th><input required type="text" name={"itemname_" + props.num} /></th>
        <th><input required type="number" name={"quantity_" + props.num} /></th>
        <th><input required type="number" name={"price_" + props.num} /></th>
        <th><input type="button" name="cancel" value="X" /></th>
      </tr>
    )
  }

  addRow() {
    this.setState({
      num: this.state.num + 1,
      child: [(
        <this.tableRow num={this.state.num}/>
      ), this.state.child]

    })
  }

  render() {
    return (
      <div className="Post">
        <h1>Post</h1>
        <form
          onSubmit={this.submit}
          >
          <table>
            <thead>
              <tr>
                <th>品目</th>
                <th>数量</th>
                <th>価格</th>
              </tr>
            </thead>
            <tbody>
              <this.tableRow num="0"/>
              {this.state.child}
              <tr>
                <th colspan="3">
                  <input type="button" value="+" className="AddButton" onClick={this.addRow}/>
                </th>
              </tr>
            </tbody>
          </table>
          <textarea className="textarea" placeholder="コメント"></textarea>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
