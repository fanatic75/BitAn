import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import BottomMessageBar from "./BottomMessageBar";
import PropTypes from 'prop-types';

const myMessagesObject = [


];

let listID=0;

class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMessages: myMessagesObject,
    }
    this.addMessage = this.addMessage.bind(this);
    this.addStrMessage=this.addStrMessage.bind(this);
  }


  addMessage(message) {

    this.setState(() => {
    const temp = { text: message,id:listID++ }
    return(this.state.myMessages.push(temp));
      });

  }
  addStrMessage(messageFromStranger){
    this.setState(() => {
      const temp={text:messageFromStranger,id:listID++,fromStr:true}
      return(this.state.myMessages.push(temp));
    });
  }




  render() {



    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (this.props.visibility) {
      return (
        <React.Fragment>
          <MenuAppBar />
          <MessageList messages={this.state.myMessages} />
          <BottomMessageBar addMessageFunc={this.addMessage} addStrMessage={this.addStrMessage} />
        </React.Fragment>
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
