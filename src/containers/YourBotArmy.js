import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // constructor(props) {
  //   super(props)
  //
  // }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => <BotCard key={bot.id} {...bot} showSpecs={this.props.showSpecs} />)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
