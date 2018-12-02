import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import BottomMessageBar from "./BottomMessageBar";
import PropTypes from 'prop-types';

const DUMMY_DATA = [
  {
    text: "who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? who'll win? "
    , id: "1"
  },
];

const myMessagesObject = [


];

let listID = 0;

class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMessages: myMessagesObject,
    }
    this.messageRef = React.createRef();

    this.addMessage = this.addMessage.bind(this);
    this.addStrMessage = this.addStrMessage.bind(this);
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

  addStrMessage(messageFromStranger) {
    this.setState(() => {
      const temp = { text: messageFromStranger, id: listID++, fromStr: true }
      return (this.state.myMessages.push(temp));
    });
  }




  render() {



    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (this.props.visibility) {
      return (
        <React.Fragment>


          <MenuAppBar />

          <MessageList messageRef={this.messageRef} messages={this.state.messages} />

          <BottomMessageBar myRefProp={this.createInputRef} addMessageFunc={this.addMessage} addStrMessage={this.addStrMessage} />

        </React.Fragment >
      );
    } else {
      return (null);
    }
  }
}
ChattingPage.propTypes = {
  visibility: PropTypes.bool.isRequired,
}

export default ChattingPage;
