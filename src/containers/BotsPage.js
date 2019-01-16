import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    botData:[],
    selectedBots:[]
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        botData:data
      })
    })
  }

  handleClick = (bot)=>{

    let foundBot = this.state.selectedBots.find(inBot=> inBot.id === bot.id)
    if (foundBot) {
      let index = this.state.selectedBots.findIndex(inBot=> inBot.id === foundBot.id)
      let copySelBot = [...this.state.selectedBots]
      copySelBot.splice(index,1)
      this.setState({
        selectedBots: copySelBot
      })

    }else{
      this.setState({
        selectedBots:[...this.state.selectedBots, bot]
      })
    }

  }

  render() {
    return (
      <div>
      <YourBotArmy handleClick={this.handleClick} selectedBots={this.state.selectedBots}/>
      <BotCollection handleClick={this.handleClick} botData={this.state.botData}/>

      </div>
    );
  }

}

export default BotsPage;
