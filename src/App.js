import React, { Component } from "react";
import "./App.css";
import GitUser from './Components/GitUser';

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
      user = <GitUser 
          avatar_url={this.state.user.avatar_url}
          login={this.state.user.login}
          type={this.state.user.type}
          html_url={this.state.user.html_url}
        />
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
