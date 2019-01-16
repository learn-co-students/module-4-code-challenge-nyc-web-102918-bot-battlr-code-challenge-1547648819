import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one\
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  handleAddBot = (botId) => {
    console.log(botId)
    let clickedBot = this.state.bots.find((bot) => bot.id === botId)
    console.log(clickedBot)
    if (!this.state.myBots.includes(clickedBot)) {
      let myBotsCopy = [...this.state.myBots, clickedBot]
      this.setState({
        myBots: myBotsCopy
      })
    }
  }

  handleRemoveBot = (botId) => {
    console.log(botId)
    let myBotsCopy = [...this.state.myBots].filter((bot) => {
      return bot.id !== botId
    })
    this.setState({
      myBots: myBotsCopy
    })
  }

  render() {
    console.log('myBots', this.state.myBots)
     // console.log('bots', this.state.bots)
    return (
      <div>
        <YourBotArmy bots={this.state.myBots}
          handleBotClick={this.handleRemoveBot}
        />
        <BotCollection bots={this.state.bots}
          handleBotClick={this.handleAddBot}
        />
      </div>
    );
  }

}

export default BotsPage;
