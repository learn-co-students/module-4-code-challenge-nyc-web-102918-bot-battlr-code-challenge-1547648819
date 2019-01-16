import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botCollection: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        botCollection: data
      })
    })
  }

  handleClick = (botID) => {
    let selectedBot = this.state.botCollection.filter(bot => bot.id === botID)
    let actualBot = selectedBot[0]
    if (!this.state.botArmy.includes(actualBot)) {
      this.setState({
        botArmy: [...this.state.botArmy, actualBot]
      })
    }
  }

  // showBots = () => {
  //   if (this.state.botCollection) {
  //     return this.state.botCollection.map(bot => {
  //       return <BotCard
  //         bot={bot}
  //         handleClick={this.handleClick}
  //          />
  //     })
  //   } else {
  //     return this.state.botArmy.map(bot => {
  //       return <BotCard bot={bot} />
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          showBots={this.showBots}
           />
        <BotCollection
          botCollection={this.state.botCollection}
          showBots={this.showBots}
          handleClick={this.handleClick}
           />
      </div>
    );
  }

}

export default BotsPage;
