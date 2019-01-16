import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {



  render(){
    console.log(this.props.selectedBot);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.showingSpecs ?
            <BotSpecs key={this.props.selectedBot.id} {...this.props.selectedBot} showBotSpecs={this.props.showBotSpecs} enlistInArmy={this.props.enlistInArmy}/> :
            this.props.bots.map(bot => <BotCard key={bot.id} {...bot} showBotSpecs={this.props.showBotSpecs}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
