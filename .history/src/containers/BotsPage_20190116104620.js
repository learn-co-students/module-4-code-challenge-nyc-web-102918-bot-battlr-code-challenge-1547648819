import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
      state = {
        active: null,
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

      showDetails = (botId) => {
        console.log("firing")
        this.setState({
          active: botId
        })
      }
      currentBot = () => {this.state.allBots.find(bot => bot.id === this.state.active)}
  
  
      render() {
    return (
      <div>
        <YourBotArmy allBots={this.state.allBots} />
        <BotCollection allBots={this.state.allBots} showDetails={this.showDewtails}/>
      </div>
    );
  }

}

export default BotsPage;
