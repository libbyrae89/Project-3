import React, { Component } from "react";

import "./App.css";

import NavBar from "./components/pages/NavBar";
import BodyRP from "./components/pages/BodyRP";



class App extends Component {
  render() {


    return (
      <div className="App">
        <div id="wrapper">
          <NavBar />
          <BodyRP />

        </div>
      </div>
    );
  }
}

export default App;
