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

  handleSort = (value) => {
    const botsCopy = this.state.bots
    if (value === 'health') {
      botsCopy.sort((a, b) => {
        return a.health - b.health
      })
      console.log(botsCopy)
    } else if (value === 'damage') {
      botsCopy.sort((a, b) => {
        return a.damage - b.damage
      })
      console.log(botsCopy)
    } else if (value === 'armor') {
      botsCopy.sort((a, b) => {
        return a.armor - b.armor
      })
      console.log(botsCopy)
    }
    

  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.army}
          showSpecs={this.showSpecs}
        />
        {this.state.selected ?
          <BotSpecs
            bot={this.state.bots.find(bot => bot.id === this.state.selected)}
            handleEnlist={this.handleEnlist}
            goBack={this.goBack} /> :
            <BotCollection
              bots={this.state.bots}
              handleEnlist={this.handleEnlist}
              showSpecs={this.showSpecs}
              handleSort={this.handleSort}
            />}
      </div>
    );
  }

}

export default BotsPage;
