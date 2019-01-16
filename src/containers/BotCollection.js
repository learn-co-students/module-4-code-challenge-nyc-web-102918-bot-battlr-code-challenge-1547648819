import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log(this.props.robots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.robots.map(robot => <BotCard key={robot.id} bot={robot} addBotToArmy={this.props.addBotToArmy} toggleBotSpec={this.props.toggleBotSpec} reRenderAllBots={this.props.reRenderAllBots} />)}
    		  {/*Collection of all bots*/}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
