import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  }

  handleClick = id => {
  	const bot = this.state.bots.find(bot => bot.id === id)

  	bot.owned = !bot.owned

  	this.setState({ bots: this.state.bots })
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(bots => this.setState({ bots }))
  }

  render() {
    return (
      <div>
        <YourBotArmy 
        	bots={this.state.bots.filter(bot => bot.owned)}
        	handleClick={this.handleClick}
        />
        <BotCollection 
        	bots={this.state.bots.filter(bot => !bot.owned)}
        	handleClick={this.handleClick}
        />
      </div>
    );
  }

}

export default BotsPage;
