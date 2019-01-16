import React from "react"
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    allBots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch(' https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(result => result.json())
    .then(allBots => this.setState({allBots}))
  }

  handleBotCardClick = (botId) => {
    let enlisted = !!this.state.botArmy.find(bot => bot.id === botId)

    if (!enlisted) {
      let newRecruit = this.state.allBots.find(bot => bot.id === botId)
      let allBotsCopy = [...this.state.allBots].filter(bot => bot.id !== botId)
      this.setState({
        allBots: allBotsCopy,
        botArmy: [...this.state.botArmy, newRecruit]
      })
    }
    else {
      let dischargedBot = this.state.botArmy.find(bot => bot.id === botId)
      let botArmyCopy = [...this.state.botArmy].filter(bot => bot.id !== botId)
      this.setState({
        allBots: [...this.state.allBots, dischargedBot],
        botArmy: botArmyCopy
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleBotCardClick={this.handleBotCardClick}/>
      <BotCollection allBots={this.state.allBots} handleBotCardClick={this.handleBotCardClick}/>
      </div>
    );
  }

}

export default BotsPage;
