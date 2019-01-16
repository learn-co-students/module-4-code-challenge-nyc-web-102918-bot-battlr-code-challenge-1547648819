import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.props.bots.filter(bot => bot.inArmy)}
          enlistInArmy={this.props.enlistInArmy}
          showBotSpecs={this.props.showBotSpecs}
        />
        <BotCollection
          bots={this.props.bots.filter(bot => !bot.inArmy)}
          showingSpecs={this.props.showingSpecs}
          showBotSpecs={this.props.showBotSpecs}
          selectedBot={this.props.selectedBot}
          enlistInArmy={this.props.enlistInArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
