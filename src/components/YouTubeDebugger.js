// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    let newCount = this.state.timesClicked + 1;
    this.setState({
      timesClicked: newCount,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>${this.state.timesClicked}</button>
      </div>
    );
  }
}
