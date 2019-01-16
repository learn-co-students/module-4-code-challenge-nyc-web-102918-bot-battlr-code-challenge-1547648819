import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  generateBots = () => {
    return this.props.bots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick}/>
    })
  }

  render(){
    console.log(this.props)
      return (
        <div className="ui four column grid">
          <div className="row">
            {this.generateBots()}
          </div>
        </div>
  	   );
     }

};

export default BotCollection;
