import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    bots: [],
    yourBotArmy: []
  }

  addToArmy = (id) => {
    const clickedBot = this.state.bots.find(bot => bot.id === id)

    this.setState({
      yourBotArmy: [...this.state.yourBotArmy, clickedBot]
    })
  }

  componentDidMount() {
    fetch(' https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(botData => this.setState({bots: botData}))
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy}/>
        <YourBotArmy yourBotArmy={this.state.yourBotArmy}/>
      </div>
    );
  }
}

export default BotsPage;
