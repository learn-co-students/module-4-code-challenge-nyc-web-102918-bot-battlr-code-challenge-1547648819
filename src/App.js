import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      data.forEach(bot => bot.inArmy = false)
      this.setState({
        bots: data
      })
    })
  }

  selectBot = (botId) => {
    let foundBot = this.state.bots.find(bot => bot.id === botId)
    foundBot.inArmy = !foundBot.inArmy
    this.setState({
      bots: this.state.bots
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} selectBot={this.selectBot}/>
      </div>
    );
  }
}

export default App;
