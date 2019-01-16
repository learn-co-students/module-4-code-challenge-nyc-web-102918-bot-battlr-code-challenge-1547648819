import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    enlisted: false,
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

handleAddBotClick = (id) => {
  const copyBots = [...this.state.bots]
  const enlistedBot = copyBots.filter(bot => {
    return bot.id == id
  })
  const delistedBots = copyBots.filter(bot => {
    return bot.id != id
  })
  console.log(delistedBots)
  this.setState({
    bots: delistedBots,
    botArmy: this.state.botArmy.concat(enlistedBot)
  })
  }
  //bit lost on how to set the state outside of the class component we like to operate on
  //trying to make a condition for a state of enlisted to toggle the card between botarmy and botcollection
  // handleAddBotClick = (id, enlisted) => {
  //   if (enlisted === false) {
  //     const copyBots = [...this.state.bots]
  //     const enlistedBot = copyBots.filter(bot => {
  //       return bot.id == id
  //     })
  //     const delistedBots = copyBots.filter(bot => {
  //       return bot.id != id
  //     })
  //     console.log(delistedBots)
  //     this.setState({
  //       bots: delistedBots,
  //       botArmy: this.state.botArmy.concat(enlistedBot)
  //     })
  //   }
  //   else if(enlisted === true) {
  //     const copyBots = [...this.state.botArmy]
  //     const delistedBot = copyBots.filter(bot => {
  //       return bot.id == id
  //     })
  //     const enlistedBots = copyBots.filter(bot => {
  //       return bot.id != id
  //     })
  //   }
  // }

  render() {
    return (
      <div>
      <YourBotArmy botArmy={this.state.botArmy} handleAddBotClick={this.handleAddBotClick} enlisted={this.state.enlisted}/>
        <BotCollection bots={this.state.bots} handleAddBotClick={this.handleAddBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
