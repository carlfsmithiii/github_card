import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      active: false
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    if (!this.state.active) {
      fetch("https://api.github.com/users/carlfsmithiii")
        .then(res => res.json())
        .then(carlStats => this.setState({ user: carlStats, active: true }));
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    let user = null;
    if (this.state.active) {
      user = (
        <div>
          <img src={this.state.user.avatar_url} alt="abstract marker" />
          <h2>{this.state.user.login}</h2>
          <p>Type: {this.state.user.type}</p>
          <p>
            URL:{" "}
            <a href={this.state.user.html_url}>{this.state.user.html_url}</a>
          </p>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.handleEvent}>
          {this.state.active ? "Hide User" : "Show User"}
        </button>
        { user }
      </div>
    );
  }
}

export default App;
