import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => {
            return <BotCard bot={bot} key={bot.id} handleBotCardClick={this.props.handleBotCardClick}/>
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
