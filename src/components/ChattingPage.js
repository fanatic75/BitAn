import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import PropTypes from 'prop-types';
import BottomMessageBar from "./BottomMessageBar";



const myMessagesObject = [


];



class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: myMessagesObject,

    }
    this.messageRef = React.createRef();

    this.addMessage = this.addMessage.bind(this);
    this.addStrMessage = this.addStrMessage.bind(this);
  }


  setFocusOnMessage = () => {
    if (this.messageRef)
        this.messageRef.current.scrollIntoView(false);

  }


  setFocusOnInput = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  createInputRef = el => this.inputRef = el;

  addMessage(message) {

    this.setState(prevState => {
      let messages = prevState.messages;
      const temp = { text: message, id: Date.now() }
      messages.push(temp);
      return { messages };
    }, this.setFocusOnMessage);
  }

  addStrMessage(messageFromStranger) {
    this.setState(() => {
      const temp = { text: messageFromStranger, id: Date.now(), fromStr: true }
      return (this.state.messages.push(temp));
    }, this.setFocusOnMessage);
  }




  render() {



    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (this.props.visibility) {
      return (
        <React.Fragment >


          <MenuAppBar />

          <MessageList messageRef={this.messageRef}  messages={this.state.messages}  addMessageFunc={this.addMessage} addStrMessage={this.addStrMessage} />
          <BottomMessageBar myRefProp={this.createInputRef}  addMessageFunc={this.addMessage} addStrMessage={this.addStrMessage}  />


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
