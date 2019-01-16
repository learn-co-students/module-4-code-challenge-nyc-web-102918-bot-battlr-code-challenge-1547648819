import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    allBots: []
  }


  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
