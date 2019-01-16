import React from "react";
// agrego los child que necesito
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";


 class BotsPage extends React.Component {
  state = {
    robots: [],
    robotVisto: null,
    selectedRobots: [],
    list: true
  };

   componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(r => r.json())
      .then(robots =>   this.setState({ robots }))
  };


  seeTodo = () => {
   this.setState({
     robotVisto: null,
     list: true
   })
 };

   detalles = (botId) => {
    this.setState({
      robotVisto: botId,
      list: false
    })
  };




// esta funcion es para cuando selecciono el robot y luego va botSpecs
   lista = (botId) => {

     //copy of my data
     let newList =[...this.state.selectedRobots]

     newList.push(botId)

     this.setState({
      selectedRobots: newList,
      robotVisto: null,
      list: true
    })
  };


   render() {
    console.log(this.state.robots,"Venezuela")
    let viewDesplegada //necesito declararla aqui para que pueda funcionar
    // aqui pregunto si exite si el robotvisto existe por el estado del boolean si es asi lo busco en mi data de otra manera no haga nada
    let robotDesplegado = this.state.robotVisto ? this.state.robots.find(bot => bot.id === this.state.robotVisto) : null
     if (this.state.list) {
      viewDesplegada = <BotCollection robots={this.state.robots} view={this.detalles}/>
    } else {
      //esta view es para cuando hay un solo robot en la vista abajo
      viewDesplegada = <BotSpecs bot={robotDesplegado} seeTodo={this.seeTodo} lista={this.lista}/>
    }

     return (
      <div>
        <YourBotArmy {...this.state} view={this.detalles} />
        {viewDesplegada}
      </div>
    )
  }
}

 export default BotsPage;
