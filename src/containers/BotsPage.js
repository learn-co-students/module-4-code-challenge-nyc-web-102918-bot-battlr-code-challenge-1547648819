import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botCollection: [],
    botArmy: [],
    clickedBot: '',
    backed: false
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

  showSpecs = (botID) => {
    let foundBot = this.state.botCollection.find(bot => bot.id === botID)
    foundBot.clicked = true
    console.log(foundBot);
    this.setState({
      clickedBot: foundBot
    })
  }

  enlist = (botID) => {
    let selectedBot = this.state.botCollection.filter(bot => bot.id === botID)
    let actualBot = selectedBot[0]
    if (!this.state.botArmy.includes(actualBot)) {
      this.setState({
        botArmy: [...this.state.botArmy, actualBot]
      })
    }
  }

  ifTrue = () => {
       if (this.state.backed === true) {
         this.setState({
           backed: !this.state.backed
         })
         return <div></div>
       } else if (this.state.clickedBot) {
         return <BotSpecs bot={this.state.clickedBot}
           enlist={this.enlist}
           backOut={this.backOut} />
       }
     }

  backOut = () => {
    this.setState({
      backed: true
    })
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
         {this.ifTrue()}
        <BotCollection
          botCollection={this.state.botCollection}
          showBots={this.showBots}
          handleClick={this.handleClick}
          showSpecs={this.showSpecs}
          enlist={this.enlist}
          backOut={this.backOut}
           />
      </div>
    );
  }

}

export default BotsPage;
