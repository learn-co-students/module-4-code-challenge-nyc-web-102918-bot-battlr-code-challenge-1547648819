import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one


  state = {
    robots: [],
    myRobots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(r => r.json())
      .then(robots => this.setState({ robots }))
  }

  addBotToArmy = (id) => {
    // console.log('Bot added')
    // console.log(id)
    const botToAdd = this.state.robots.find(bot => bot.id === id)
    // console.log(botToAdd)
    const myRobotsCopy = [...this.state.myRobots, botToAdd]
    // console.log(myRobotsCopy)
    this.setState({
      myRobots: myRobotsCopy
    })
  }

  render() {
    // console.log(this.state.robots)
    // console.log(this.state.myRobots)
    return (
      <div>
        <BotCollection robots={this.state.myRobots} />
        <BotCollection robots={this.state.robots} addBotToArmy={this.addBotToArmy} />
      </div>
    );
  }

}

export default BotsPage;
