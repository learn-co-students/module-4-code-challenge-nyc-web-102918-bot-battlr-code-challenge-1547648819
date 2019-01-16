import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    botData:[],
    clickedBotArray:[],
    showBot:[]
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(botData=>{
      this.setState({
        botData
      })
    })
  }

  handleClick = (id) => {
    // console.log('clicked')
    // console.log(id)
    let clickedBot = this.state.botData.find(robot => id === robot.id)
    // console.log(clickedBot)
    if (!this.state.clickedBotArray.includes(clickedBot)){
    let copyArray=[...this.state.clickedBotArray, clickedBot]
    this.setState({
      clickedBotArray:copyArray
    })
  }}
  //^ adds clicked bot to army

  removeFromArmy = (id) => {
    console.log("remove")
    console.log(id)
    let clickedBot = this.state.clickedBotArray.find(robot => id === robot.id)
    let removeFromArray= this.state.clickedBotArray.filter(robot => id !== robot.id)
    this.setState({
      clickedBotArray:removeFromArray
    })
  }
//^removes clicked bot from army

showSpecs = (id) => {
  console.log(id)
  console.log("clicked")
  let clickedBot = this.state.botData.find(robot=> id === robot.id)
  if (!this.state.showBot.includes(clickedBot)){
  let showBotArray =[...this.state.showBot,clickedBot]
  this.setState({
    showBot:showBotArray
  })
  }
}
//^ attempt to make clicked bot show details


  render() {
    return (
      <div>
      <YourBotArmy
      clickedBotArray={this.state.clickedBotArray}
      removeFromArmy={this.removeFromArmy}
      />
      <BotCollection
      botData={this.state.showBot.length > 0 ? this.state.showBot : this.state.botData}
      handleClick={this.handleClick}
      showSpecs={this.showSpecs}
      />
      </div>
    );
  }

}

export default BotsPage;
