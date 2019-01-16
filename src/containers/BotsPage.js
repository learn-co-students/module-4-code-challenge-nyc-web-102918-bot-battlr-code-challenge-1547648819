import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selected: null
  }

  handleClick = id => {
  	const bot = this.state.bots.find(bot => bot.id === id)

  	if (bot.owned) {
  		bot.owned = false

  		this.setState({ bots: this.state.bots })
	  } else {
	  	this.setState({ selected: id })
	  }
  }

  handleEnlist = () => {
  	const bot = this.state.bots.find(bot => bot.id === this.state.selected)

  	bot.owned = true
  	this.setState({ bots: this.state.bots, selected: null })
  }

  handleGoBack = () => {
  	this.setState({ selected: null })
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(bots => this.setState({ bots }))
  }

  getComponent = () => {
  	if (this.state.selected != null) {
  		const bot = this.state.bots.find(bot => bot.id === this.state.selected)

  		return (
  			<BotSpecs
  				bot={bot}
  				handleEnlist={this.handleEnlist}
  				handleGoBack={this.handleGoBack}
  			/>
  		)
  	} else {
  		return (
  			<BotCollection 
        	bots={this.state.bots.filter(bot => !bot.owned)}
        	handleClick={this.handleClick}
        />
      )
  	}
  }

  render() {
    return (
      <div>
        <YourBotArmy 
        	bots={this.state.bots.filter(bot => bot.owned)}
        	handleClick={this.handleClick}
        />
        {this.getComponent()}
      </div>
    );
  }

}

export default BotsPage;
