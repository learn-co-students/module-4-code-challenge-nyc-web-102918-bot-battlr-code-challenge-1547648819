import React from "react";

const BotCard = props => {
  // const { bot } = props;

  let botType;

  switch (props.bot_class) {
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
    <div className="ui column">
      <div
        className="ui card"
        key={props.id}
        onClick={() => props.showSpecs(props.id)}
      >
        <div className="image">
          <img alt="oh no!" src={props.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
