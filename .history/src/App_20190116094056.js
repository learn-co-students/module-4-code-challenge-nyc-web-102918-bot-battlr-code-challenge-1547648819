import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

      state = {
        allBots: []
      }


      componentDidMount(){
        fetch(" https://bot-battler-api.herokuapp.com/api/v1/bots")
          .then(function(response){
              console.table(response)
              return response.json()
          })
          .then(botsData => this.setState({
              allBots:botsData
          }))
      }

      
      render() {
        return (
          <div className="App">
            <BotsPage />
          </div>
        );
      }
    }

export default App;
