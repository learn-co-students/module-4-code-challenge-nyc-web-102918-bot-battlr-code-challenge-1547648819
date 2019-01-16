import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {


    /*// conditionalRender = () => {
    //   if (this.props.botData.length === 1){
    //     this.props.botData.map(bot => {
    //     return <BotSpecs
    //      key={bot.id}
    //      bot={bot}/>}
    //   )}
    //   else {
    //     this.props.botData.map(bot => {
    //     return <BotCard
    //     key={bot.id}
    //     bot={bot}
    //     handleClick={this.props.handleClick}
    //     showSpecs={this.props.showSpecs}
    //     /> }
    //   )}
    // }
    */

//^failed attemp at refactoring. needed more time


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botData.map(bot => {
            return <BotCard
            key={bot.id}
            bot={bot}
            handleClick={this.props.handleClick}
            showSpecs={this.props.showSpecs}
            //^showSpecs not used :(
            /> })
         }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
