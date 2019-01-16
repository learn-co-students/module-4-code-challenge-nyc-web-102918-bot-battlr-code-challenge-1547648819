import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => <BotCard key={bot.id} {...bot} selectBot={this.props.selectBot} enlistInArmy={this.props.enlistInArmy} showBotSpecs={this.props.showBotSpecs}/>)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
