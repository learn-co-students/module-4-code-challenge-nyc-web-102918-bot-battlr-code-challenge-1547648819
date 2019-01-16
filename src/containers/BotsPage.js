import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  state= {
      bots:[],
      showView: false,
      ClickedBotId: 0
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp=>resp.json())
    .then((bots)=>{
      bots.forEach(bot => Object.assign(bot,{inArmy: false}))
      this.setState({bots: bots})
    })
  }

  selectBot=(id)=> {
    this.setState(
      Object.assign({}, this.state, {clickedBotId: id}, {showView: true})
    )

  }
  exitShow= ()=>this.setState({showView:false})

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
    let botCollection=<BotCollection
      bots={this.state.bots} handleBotClick={this.selectBot}
      />
    let botSpecs=<BotSpecs
      bot={this.state.bots.find((bot)=>bot.id===this.state.clickedBotId)}
      handleBotClick={this.selectBot}
      toggleinArmy={this.toggleinArmy}
      exitShow={this.exitShow}
    />
    return (
      <div>
      <YourBotArmy bots={this.armyBots()} handleBotClick={this.selectBot}/>
      {this.state.showView? botSpecs : botCollection}
      </div>
    );
  }

}

export default BotsPage;
