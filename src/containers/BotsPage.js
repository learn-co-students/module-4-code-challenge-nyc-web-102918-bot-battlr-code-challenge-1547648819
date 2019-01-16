import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(data => {
      const cleanedBots = data.map(bot => {
        return {...bot, active: false}
      })
      this.setState({
        bots: cleanedBots
      })
    })
  }

  recruitBot = (botId) => {
    console.log("recruit:", botId)
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === botId) {
        bot.active = !bot.active
        return bot
      } else {
        return bot
      }
    })

    this.setState({
      bots: updatedBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots.filter(bot => bot.active)}
          recruitBot={this.recruitBot}
        />
        <BotCollection
          bots={this.state.bots.filter(bot => !bot.active)}
          recruitBot={this.recruitBot}
        />
      </div>
    );
  }

}

export default BotsPage;
