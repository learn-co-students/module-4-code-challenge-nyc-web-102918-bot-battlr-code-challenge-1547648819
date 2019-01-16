import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy bots={this.props.bots.filter(bot => bot.inArmy)} selectBot={this.props.selectBot}/>
        <BotCollection bots={this.props.bots.filter(bot => !bot.inArmy)} selectBot={this.props.selectBot} />
      </div>
    );
  }

}

export default BotsPage;
