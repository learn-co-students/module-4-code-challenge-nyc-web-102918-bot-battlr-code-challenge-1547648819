import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: [],
    showingSpecs: false,
    selectedBot: null
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

  showBotSpecs = (botId) => {
    let foundBot = this.state.bots.find(bot => bot.id === botId)
    this.setState({
      showingSpecs: !this.state.showingSpecs,
      selectedBot: foundBot
    })
  }

  enlistInArmy = (botId) => {
    let foundBot = this.state.bots.find(bot => bot.id === botId)
    foundBot.inArmy = !foundBot.inArmy
    this.setState({
      bots: this.state.bots
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage
          bots={this.state.bots}
          showingSpecs={this.state.showingSpecs}
          showBotSpecs={this.showBotSpecs}
          selectedBot={this.state.selectedBot}
          enlistInArmy={this.enlistInArmy}/>
      </div>
    );
  }
}

export default App;
