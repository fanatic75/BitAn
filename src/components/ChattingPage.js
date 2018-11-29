import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import BottomMessageBar from "./BottomMessageBar";
import { Grid } from "@material-ui/core";
const DUMMY_DATA = [
  {
    text: "who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? "
    , id: "1"
  },

]
class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_DATA,
    }
    this.messageRef = React.createRef();

    this.addMessage = this.addMessage.bind(this);
  }


  setFocusOnMessage = () => {
    if (this.messageRef) {
      // console.log(this.messageRef);
      this.messageRef.current.focus();
      this.setFocusOnInput();
    }

  }
  setFocusOnInput = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  createInputRef = el => this.inputRef = el;

  addMessage(message) {
    console.log(message);
    this.setState(prevState => {
      let messages = prevState.messages;
      const temp = { text: message, id: Date.now() }
      messages.push(temp);
      return { messages };
    }, this.setFocusOnMessage);
  }


  sendMessage(text) {
    const tempData = DUMMY_DATA.map()
  }

  render() {
    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (true) {
      return (
        <React.Fragment>
          <Grid>

            <MenuAppBar />

            <MessageList messageRef={this.messageRef} messages={this.state.messages} />

            <BottomMessageBar myRefProp={this.createInputRef} addMessageFunc={this.addMessage} />
          </Grid>
        </React.Fragment>
      );
    } else {
      return (null);
    }
  }
}

export default ChattingPage;
