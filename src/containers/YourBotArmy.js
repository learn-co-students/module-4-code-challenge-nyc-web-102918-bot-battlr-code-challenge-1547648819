import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {this.props.selectedBots.length>0 ? this.props.selectedBots.map(bot=> <BotCard key={bot.id} handleClick={this.props.handleClick} bot={bot}/>) :null}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
