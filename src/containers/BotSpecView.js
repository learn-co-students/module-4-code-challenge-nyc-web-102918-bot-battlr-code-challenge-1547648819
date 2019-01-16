import React, {Fragment} from "react"
import BotSpecs from "../components/BotSpecs";

const BotSpecView = props => {
  return (
    <Fragment>
    {props.bots.map(bot => {
      return <BotSpecs
              key={bot.id}
              bot={bot}
              recruitBot={props.recruitBot}
              removeBotDetails={props.removeBotDetails}
              />
    })}
  </Fragment>
  )
}

export default BotSpecView
