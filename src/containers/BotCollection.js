import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  state = {
    enlisted: false
  }

  toggleEnlisted = (enlisted) => {
    console.log(enlisted)
    // if (enlisted === false) {
    //   this.setState({
    //     enlisted: true
    //   })
    // }
    // else if(enlisted === true) {
    //   this.setState({
    //     enlisted: false
    //   })
    // }
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {
            this.props.bots.map(bot => {
              return <BotCard bot={{...bot}} handleAddBotClick={this.props.handleAddBotClick} enlisted={this.state.enlisted} toggleEnlisted={this.toggleEnlisted}/>
            })
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
