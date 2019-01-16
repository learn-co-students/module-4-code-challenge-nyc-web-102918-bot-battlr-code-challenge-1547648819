import React from "react";
import BotSpecs from './BotSpecs'


function renderBotSpecs(bot, specsFunction, addFunction) {
    if (bot.clicked) {
      return (
        <div className="ui column">
          <div
            className="ui card"
            key={bot.id}
            onClick={() => specsFunction(bot.id)}

          >
            <div className="image">
              <img alt="oh no!" src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">
                {bot.name}
              </div>

              <div className="meta text-wrap">
                <small>{bot.catchphrase}</small>
              </div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat" />
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
          <BotSpecs bot={bot} addBotToArmy={addFunction} />
        </div>
    );


    } else {
      return (
        <div className="ui column">
          <div
            className="ui card"
            key={bot.id}
            onClick={() => specsFunction(bot.id)}

          >
            <div className="image">
              <img alt="oh no!" src={bot.avatar_url} />
            </div>
            <div className="content">
              <div className="header">
                {bot.name}
              </div>

              <div className="meta text-wrap">
                <small>{bot.catchphrase}</small>
              </div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat" />
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
        </div>
      );

    }


  }

const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    renderBotSpecs(bot, props.toggleBotSpec, props.addBotToArmy)
  )
};

export default BotCard;
