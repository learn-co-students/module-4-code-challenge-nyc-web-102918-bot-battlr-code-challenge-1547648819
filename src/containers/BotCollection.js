import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  // constructor(props) {
  //   super(props)
  //
  // }

  render(){
  	return (
  	  <div className="ui four column grid">
        <div>
          <form>
            <label>
              Sort bots by:
              <select onChange={(event) => this.props.handleSort(event.target.value)}>
                <option value='health'>Health</option>
                <option value='damage'>Damage</option>
                <option value='armor'>Armor</option>
              </select>
            </label>
          </form>
        </div>
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
