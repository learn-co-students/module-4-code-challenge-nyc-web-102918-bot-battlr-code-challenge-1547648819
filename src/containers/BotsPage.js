import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    selected: null
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
      army: newArmy,
      selected: null
    })
  }

  showSpecs = (id) => {
    this.setState({
      selected: id
    })
  }

  goBack = () => {
    this.setState({
      selected: null
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} />
        {this.state.selected ?
          <BotSpecs
            bot={this.state.bots.find(bot => bot.id == this.state.selected)}
            handleEnlist={this.handleEnlist}
            goBack={this.goBack} /> :
            <BotCollection
              bots={this.state.bots}
              handleEnlist={this.handleEnlist}
              showSpecs={this.showSpecs}
            />}
      </div>
    );
  }

}

export default BotsPage;
