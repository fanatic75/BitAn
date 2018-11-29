import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import BottomMessageBar from "./BottomMessageBar";
const messagesObject = [


]
class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messagesObject,
    }
    this.addMessage = this.addMessage.bind(this);
  }


  addMessage(message) {

    this.setState(() => {
    const temp = { text: message,id:0 }
    return(this.state.messages.push(temp));
      });

  }



  render() {

    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (this.props.visibility) {
      return (
        <React.Fragment>
          <MenuAppBar />
          <MessageList messages={this.state.messages} />
          <BottomMessageBar addMessageFunc={this.addMessage} />
        </React.Fragment>
      );
    } else {
      return (null);
    }
  }
}

export default ChattingPage;
