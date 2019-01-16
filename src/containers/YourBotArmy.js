import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.clickedBotArray)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.clickedBotArray.map(bot =>{
              return <BotCard
              key={bot.id}
              bot={bot}
              handleClick={this.props.removeFromArmy}
              />}
            )}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
