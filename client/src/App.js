import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/pages/NavBar";
import BodyRBG from "./components/pages/BodyRBG";
import Footer from "./components/pages/Footer";



class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <NavBar />
      <BodyRBG />
      <Footer />
      </div>
      </div>
    );
  }
}

export default App;
