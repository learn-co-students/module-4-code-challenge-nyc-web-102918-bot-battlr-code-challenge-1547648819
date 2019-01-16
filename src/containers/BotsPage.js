import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    allBots: [],
    botArmy: []
  }

componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(response => response.json())
  .then(bots => {
    this.setState({
      allBots: bots
    })
  })
}

addBotArmy = (id) => {
  const foundBot = this.state.allBots.find(bot => {
      return bot.id === id
  })
  this.setState({
    botArmy: [...this.state.botArmy, foundBot]
  })
}


  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} />
        <YourBotArmy allBots={this.state.botArmy} addBotArmy={this.addBotArmy} />
      </div>
    );
  }

}

export default BotsPage;
