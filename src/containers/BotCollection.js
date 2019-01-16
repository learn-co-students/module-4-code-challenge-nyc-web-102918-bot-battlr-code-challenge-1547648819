import React from "react";
import BotCard from "../components/BotCard";

// I changed the class with const because it makes more sense to me in my mind wiht this way
// I'm passing my robots and view from BotsPage thorugh the props
//class BotCollection extends React.Component {

const BotCollection = props => {

const {robots,view } = props
console.log(props,"Vene2")


   const robot2= robots.map((robot) => {
  	return <div className ="ui column"><BotCard bot={robot} view={view} /></div>
  });

   return (
  <div className="ui four column grid">
  	<div className='row'>
  		{robot2}
  	</div>
  </div>
  )
};

 export default BotCollection;
