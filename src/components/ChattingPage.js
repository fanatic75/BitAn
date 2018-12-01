import React from "react";
import MessageList from "./MessageList";
import MenuAppBar from "./MenuAppBar";
import BottomMessageBar from "./BottomMessageBar";
import PropTypes from 'prop-types';
const myMessagesObject = [


];
const strMessagesObject = [
  {
    text:"Hello what's up?",
    id:0,
}
];
const newstrMessagesObject = [
  {
    text:"Hello what's up?",
    id:0,
},
{
  text:"Hello what's up?",
  id:1,
},
];

class ChattingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMessages: myMessagesObject,
      strMessages: strMessagesObject,
    }
    this.addMessage = this.addMessage.bind(this);
  }


  addMessage(message) {

    this.setState(() => {
    const temp = { text: message,id:0 }
    return(this.state.myMessages.push(temp));
      });

  }




  render() {
    setTimeout(function(){
               this.setState({strMessages:newstrMessagesObject});
          }.bind(this),20000);
    if (this.props.visibility) document.body.style.backgroundColor = "#fff7ee";

    if (this.props.visibility) {
      return (
        <React.Fragment>
          <MenuAppBar />
          <MessageList strMessagesArray={this.state.strMessages}messages={this.state.myMessages} />
          <BottomMessageBar addMessageFunc={this.addMessage} />
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
