import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
      state = {
        allBots: []
      }


      componentDidMount(){
        fetch(" https://bot-battler-api.herokuapp.com/api/v1/bots")
          .then(function(response){
              console.table(response)
              return response.json()
          })
          .then(botsData => this.setState({
              allBots:botsData
          }))
      }



  render() {
    return (
      <div>
        <BotCollection {this.state.allBots.map(bot => key={bot.id}{...bot})} />
        <YourBotArmy allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
