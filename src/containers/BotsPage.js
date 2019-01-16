import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  state= {
      bots:[]
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp=>resp.json())
    .then((bots)=>{
      bots.forEach(bot => Object.assign(bot,{inArmy: true}))
      this.setState({bots: bots})
    })
  }

  toggleinArmy = (thisBot)=>{
    let newBot= Object.assign({},thisBot, {inArmy: !thisBot.inArmy})
    let newBots=this.state.bots.map(
      bot=>{return bot.id===thisBot.id? newBot : bot}
    )
    this.setState({bots: newBots})
  }

  armyBots(){
  return this.state.bots.filter(bot=>bot.inArmy)
  }

  render() {
    return (
      <div>
      <YourBotArmy bots={this.armyBots()} handleBotClick={this.toggleinArmy}/>
      <BotCollection bots={this.state.bots} handleBotClick={this.toggleinArmy}/>
      </div>
    );
  }

}

export default BotsPage;
