import React, { Component } from "react";

import "./App.css";

import NavBarjumbo from "./components/pages/NavBarjumbo";
import Jumbotron from "./components/pages/Jumbotron";
import Tiles from "./components/pages/Tiles";
import Footer from "./components/pages/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <NavBarjumbo />
      <Jumbotron />
      <Tiles />
      <Footer />
 
     </div>
      </div>
    );
  }
}

export default App;
