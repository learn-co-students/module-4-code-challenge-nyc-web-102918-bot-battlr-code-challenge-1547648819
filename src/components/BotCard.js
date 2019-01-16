import React from "react";

 const BotCard = props => {
//estoy agregando view
   const {view, bot} = props

   let botType;

   switch(bot.bot_class){
    case 'Assault':
      botType = <i className="icon military" />
      break;
    case 'Defender':
      botType = <i className="icon shield" />
      break;
    case 'Support':
      botType = <i className="icon ambulance" />
      break;
    default:
      botType = <div/>
  }


//estoy agregando esta funcion y el evento click en la primera linea del return
// view es para cuando le doy click al la carta a mostrar 
   const showView = () => {
    view(bot.id)
  }

   return (
    <div className="ui card" key={bot.id} onClick={showView}>
      <div className="image">
        <img alt="oh no!" src={bot.avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {bot.name} {botType}
        </div>

         <div className="meta">
          <small>{bot.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat"/>
            {bot.health}
        </span>

         <span>
          <i className="icon lightning" />
            {bot.damage}
        </span>
        <span>
          <i className="icon shield" />
            {bot.armor}
        </span>
      </div>
    </div>
  );
};

 export default BotCard;
