import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props);
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
            return <BotCard
              key={bot.id} {...bot}
              handleEnlist={this.props.handleEnlist}
              showSpecs={this.props.showSpecs}
            />
          }
        )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
