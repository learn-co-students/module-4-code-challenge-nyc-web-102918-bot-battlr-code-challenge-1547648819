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
      .then(robots => robots.map(robot => Object.assign({}, robot, {clicked: false})))
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

  toggleBotSpec = (id) => {
    console.log(id)
    const robotsCopy = [...this.state.robots]
    const botToChangeClick = robotsCopy.find(bot => bot.id === id)
    botToChangeClick.clicked = true
    this.setState({
      robots: robotsCopy
    })
  }

  reRenderAllBots = () => {
    console.log('clicked')
  }

  render() {
    // console.log(this.state.robots)
    // console.log(this.state.myRobots)
    return (
      <div>
        <BotCollection robots={this.state.myRobots} />
        <BotCollection robots={this.state.robots} addBotToArmy={this.addBotToArmy} toggleBotSpec={this.toggleBotSpec} reRenderAllBots={this.reRenderAllBots} />
      </div>
    );
  }

}

export default BotsPage;
