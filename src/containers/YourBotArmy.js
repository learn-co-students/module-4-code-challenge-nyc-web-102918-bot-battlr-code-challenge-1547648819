import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  showBots = () => {
    if (this.props.botCollection) {
      return this.state.botCollection.map(bot => {
        return <BotCard
          bot={bot}
          showSpecs={this.props.showSpecs}
           />
      })
    } else {
      return this.props.botArmy.map(bot => {
        return <BotCard bot={bot} />
      })
    }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
