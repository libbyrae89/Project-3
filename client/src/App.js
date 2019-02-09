import React, { Component } from "react";

import "./App.css";
import Jumbotron2 from "./components/pages/Jumbotron2";
import Donatepage from "./components/pages/Donatepage";
import Paypal from "./components/pages/Paypal";
import Footer from "./components/pages/Footer";



class App extends Component {
  render() {


    return (
      <div className="App">
      <div id="wrapper">

   <Jumbotron2 />
   <Donatepage />
   <Paypal />
    <Footer />
      
     </div>
      </div>
    );
  }
}

export default App;
