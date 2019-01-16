import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    bots:[],
    myBots:[],
    selected:null
  }

  handleClick = (selected) => {
    this.setState({selected })
  }

  handleGoBack = () => {
    this.setState({selected:null})
  }

  handleEnlist = () => {
   let { selected } = this.state;
   const add = !this.state.myBots.filter(Bot => Bot.id === selected.id).length;
   if (add) {
     const myBots = [...this.state.myBots, selected];
     this.setState({ myBots });
   }
   this.handleGoBack();
 };


  removeBotMyArmy = (bot) => {
    let newMyBots = [...this.state.myBots]
    let index = newMyBots.indexOf(bot);
      if (index > -1) {
        newMyBots.splice(index, 1);
      }
    this.setState({
      myBots: newMyBots
    })
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r=>r.json())
    .then(r=>this.setState({ bots:r}))}


  render() {
    const { selected } = this.state;
  if (selected) {
    return (
      <BotSpecs
        bot={selected}
        handleGoBack={this.handleGoBack}
        handleEnlist={this.handleEnlist}
      />
    )
  }

    return (
      <div>
      <YourBotArmy myBotArmy={this.state.myBots} removeBotMyArmy={this.removeBotMyArmy}/>
      <BotCollection handleClick={this.handleClick} bots={this.state.bots}/>
      </div>
    );
  }
}//class end

export default BotsPage;
