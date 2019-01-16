import React from 'react'
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const botsUrl = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    recruitedBots: [],
    selectedBot: undefined
  }

  componentDidMount() {
    fetch(botsUrl)
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  }

  recruitBot = bot => {
    if (this.state.recruitedBots.includes(bot.id)) return

    this.setState({
      recruitedBots: [...this.state.recruitedBots, bot.id]
    })
  }

  dischargeBot = bot => {
    this.setState({
      recruitedBots: this.state.recruitedBots.filter(id => id !== bot.id)
    })
  }

  selectBot = bot => {
    this.setState({
      selectedBot: bot.id
    })
  }

  unSelectBot = () => {
    this.setState({
      selectedBot: undefined
    })
  }

  getBotById = id => this.state.bots.find(bot => bot.id === id)

  getBotsByIds = ids => this.state.bots.filter(bot => ids.includes(bot.id))

  recruitAndDischargeBot = () => {
    this.recruitBot({ id: this.state.selectedBot })
    this.unSelectBot()
  }

  render() {
    return (
      <div>
        <YourBotArmy
          handleClick={this.dischargeBot}
          bots={this.getBotsByIds(this.state.recruitedBots)}
        />
        {this.state.selectedBot === undefined ? (
          <BotCollection handleClick={this.selectBot} bots={this.state.bots} />
        ) : (
          <BotSpecs
            recruitBot={this.recruitAndDischargeBot}
            back={this.unSelectBot}
            bot={this.getBotById(this.state.selectedBot)}
          />
        )}
      </div>
    )
  }
}

export default BotsPage
