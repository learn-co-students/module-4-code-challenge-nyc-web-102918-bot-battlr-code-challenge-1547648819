import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs.js'


class BotsPage extends React.Component {

  state = {
    botData:[],
    selectedBots:[],
    currentBot:{},
    filterVal:""
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
        currentBot:bot
      })
    }

  }

  handleBack = ()=>{
    this.setState({
      currentBot:{},
      filterVal:""
    })
  }

  handleEnlist = (bot)=>{
    this.setState({
      selectedBots:[...this.state.selectedBots,bot],
      currentBot:{},
      filterVal:""
    })
  }

  handleFilter=(event)=>{
    this.setState({
      filterVal:event.target.value
    })
  }

  botsToDisplay=()=>{
    return this.state.botData.filter(bot=> bot.name.includes(this.state.filterVal))
  }

  render() {
    return (
      <div>
      Search Bot Name <input onChange={(e)=>this.handleFilter(e)} value={this.state.filterVal} type="text"/>
      <YourBotArmy handleClick={this.handleClick} selectedBots={this.state.selectedBots}/>
      {this.state.currentBot.id ? <BotSpecs handleBack={this.handleBack} handleEnlist={this.handleEnlist} bot={this.state.currentBot}/> :null}
      {this.state.currentBot.id ? null : <BotCollection handleClick={this.handleClick} botData={this.botsToDisplay()}/>}

      </div>
    );
  }

}

export default BotsPage;
