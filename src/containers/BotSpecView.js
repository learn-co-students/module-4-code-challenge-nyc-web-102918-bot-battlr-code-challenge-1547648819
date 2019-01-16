import React, {Fragment} from "react"
import BotSpecs from "../components/BotSpecs";

class BotSpecView extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0, 50)
  }

  render() {
    return (
      <Fragment>
        {this.props.bots.map(bot => {
          return <BotSpecs
                key={bot.id}
                bot={bot}
                recruitBot={this.props.recruitBot}
                removeBotDetails={this.props.removeBotDetails}
                />
        })}
      </Fragment>
    )
  }
}

export default BotSpecView
