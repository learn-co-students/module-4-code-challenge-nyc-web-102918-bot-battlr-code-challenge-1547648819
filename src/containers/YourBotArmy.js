import React from "react";
import BotCard from "../components/BotCard";


// I changed the class with const because it makes more sense to me in my mind wiht this way
// I'm passing my robots, selectedRobots and view thorugh the props
//class YourBotArmy extends React.Component {
 const YourBotArmy = props => {

  const {robots, selectedRobots, view} = props
  console.log(props,"Vene3")

   const robots2 = selectedRobots.map((botId,index) => {
  	let foundBot = robots.find(robot => robot.id === botId)
  	return (
      <div key={index} className="ui three wide column">
        <BotCard view={view} bot={foundBot}/>
      </div>
    )
  });

   return (

       <div className='ui segment inverted olive bot-army'>
        <div className="ui five column grid">
        	<div className="row bot-army-row">
        		{robots2}
        	</div>
        </div>
      </div>

   )
};

 export default YourBotArmy;
