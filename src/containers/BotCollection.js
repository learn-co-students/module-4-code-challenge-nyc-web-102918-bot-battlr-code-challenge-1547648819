import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  showBots = () => {
    if (this.props.botCollection) {
      return this.props.botCollection.map(bot => {
        return <BotCard
          bot={bot}
          handleClick={this.props.handleClick}
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
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.showBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
