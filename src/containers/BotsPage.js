import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecView from "./BotSpecView"
// import FilterRow from "../components/FilterRow"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    // filter: false
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(data => {
      const cleanedBots = data.map(bot => {
        return {...bot, active: false, details: false}
      })
      this.setState({
        bots: cleanedBots
      })
    })
  }

  recruitBot = (botId) => {
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
    }, this.removeBotDetails())
  }

  showBotDetails = (botId) => {
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === botId) {
        bot.details = true
        return bot
      } else {
        bot.details = false
        return bot
      }
    })

    this.setState({
      bots: updatedBots
    })

  }

  removeBotDetails = () => {
    const updatedBots = this.state.bots.map(bot => {
      bot.details = false
      return bot
    })

    this.setState({
      bots: updatedBots
    })

  }

  // filterBots = (filter) => {
  //   let botFilter
  //
  //   if (filter === "all") {
  //     botFilter = false
  //   } else {
  //     botFilter = filter
  //   }
  //
  //   this.setState({
  //     filter: botFilter
  //   })
  // }

  render() {
    // let collectedBots
    // if (this.state.filter) {
    //   collectedBots = this.state.bots.filter(bot => !bot.active && bot["bot_class"] === this.state.filter)
    //   debugger
    // } else {
    //   collectedBots = this.state.bots.filter(bot => !bot.active)
    // }

    return (
      <div>
        <YourBotArmy
          bots={this.state.bots.filter(bot => bot.active)}
          recruitBot={this.recruitBot}
        />
        <BotSpecView
          bots={this.state.bots.filter(bot => bot.details)}
          recruitBot={this.recruitBot}
          removeBotDetails={this.removeBotDetails}
        />
        {/* <FilterRow filterBots={this.filterBots}/> */}
        <BotCollection
          // bots={collectedBots}
          bots={this.state.bots.filter(bot => !bot.active)}
          recruitBot={this.recruitBot}
          showBotDetails={this.showBotDetails}
        />
      </div>
    );
  }

}

export default BotsPage;
