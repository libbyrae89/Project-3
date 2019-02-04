import React, { Component } from "react";

import "./App.css";
import Login from "./components/pages/Login";


class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <Login />
      </div>
      </div>
    );
  }
}

export default App;
