import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(bots => {
      this.setState({ bots })
    })
  }

  handleEnlist = (id) => {
    const botsCopy = this.state.bots
    const selectedBotIdx = botsCopy.findIndex(bot => bot.id === id)
    const selectedBot = botsCopy.splice(selectedBotIdx, 1)
    const newArmy = [...this.state.army, selectedBot[0]]
    this.setState({
      bots: botsCopy,
      army: newArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} />
        <BotCollection
          bots={this.state.bots}
          handleEnlist={this.handleEnlist}
        />
      </div>
    );
  }

}

export default BotsPage;
