import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state= {
    bots: [],
    myBots: []
  }
  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(bots => this.setState({
      bots
    }))
  }

  addMyBot = (botId) => {
    // console.log(botId)
    let myBot= this.state.bots.find(bot => bot.id === botId)
    // console.log(myBot)
    let filteredBots = this.state.bots.filter(bot => bot.id !== botId)
    // console.log(filteredBots)
    this.setState({
      myBots: [...this.state.myBots, myBot],
      bots: filteredBots
    })
  }
  render() {
    return (
      <div>
      <YourBotArmy bots= {this.state.myBots} myBots= {this.state.myBots} addMyBot= {this.addMyBot} />
      <BotCollection bots= {this.state.bots} addMyBot= {this.addMyBot}/>

      </div>
    );
  }

}

export default BotsPage;
