import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/pages/NavBar";
import BodyGS from "./components/pages/BodyGS";
import Footer from "./components/pages/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <NavBar />
      <BodyGS />
      <Footer />
      </div>
      </div>
    );
  }
}

export default App;
