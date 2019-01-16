import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots:[],
    myBots:[]
  }

  handleClick = (bot) => {
    if(!this.state.myBots.includes(bot)) {
      return this.setState(state => {
        state.myBots.push(bot)
        return state
      })
    }
  }

  removeBotMyArmy = (bot) => {
  let newMyBots = [...this.state.myBots]
  let index = newMyBots.indexOf(bot);
    if (index > -1) {
  newMyBots.splice(index, 1);
  }
  this.setState({
    myBots: newMyBots
  })
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r=>r.json())
    .then(r=>this.setState({ bots:r}))}


  render() {
    console.log(this.state.myBots)
    return (
      <div>
      <YourBotArmy myBotArmy={this.state.myBots} removeBotMyArmy={this.removeBotMyArmy}/>
      <BotCollection handleClick={this.handleClick} bots={this.state.bots}/>
      </div>
    );
  }
}

export default BotsPage;
