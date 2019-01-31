import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/pages/NavBar";
import Tiles from "./components/pages/Tiles";



class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <NavBar />
      <Tiles />
     
      </div>
      </div>
    );
  }
}

export default App;
