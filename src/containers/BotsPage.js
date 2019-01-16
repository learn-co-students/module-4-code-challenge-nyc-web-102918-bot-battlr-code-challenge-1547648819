import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    botData:[],
    clickedBotArray:[]
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
    console.log('clicked')
    console.log(id)
    let clickedBot = this.state.botData.find(robot => id === robot.id)
    console.log(clickedBot)
    if (!this.state.clickedBotArray.includes(clickedBot)){
    let copyArray=[...this.state.clickedBotArray, clickedBot]
    this.setState({
      clickedBotArray:copyArray
    })
  }}

  removeFromArmy = (id) => {
    console.log("remove")
    console.log(id)
    let clickedBot = this.state.clickedBotArray.find(robot => id === robot.id)
    let removeFromArray= this.state.clickedBotArray.filter(robot => id !== robot.id)
    this.setState({
      clickedBotArray:removeFromArray
    })
  }

  render() {
    return (
      <div>
      <YourBotArmy
      clickedBotArray={this.state.clickedBotArray}
      removeFromArmy={this.removeFromArmy}
      />
      <BotCollection
      botData={this.state.botData}
      handleClick={this.handleClick}
      />
      </div>
    );
  }

}

export default BotsPage;
