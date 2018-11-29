import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import BottomMessageBar from "./BottomMessageBar";
const DUMMY_DATA = [
  {
    text: "who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? "
  },

]
class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_DATA,
    }
    this.addMessage = this.addMessage.bind(this);
  }



  addMessage(message) {
    console.log(message);
    this.setState(prevState => {
      let messages = prevState.messages;
      const temp = { text: message }
      messages.push(temp);
      return { messages };
    });
  }


  sendMessage(text) {
    const tempData = DUMMY_DATA.map()
  }

  render() {
    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (true) {
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
