import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    showButton: true
  };
  click = () => {
    this.setState({ showButton: false });
  };
  render() {
    return (
      <div className="wrapper">
        {this.state.showButton ? (
          <button onClick={this.click}>
            Has Swine committed to standup yet?
          </button>
        ) : (
          <div className="no">NO</div>
        )}
      </div>
    );
  }
}

export default App;
