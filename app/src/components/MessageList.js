import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    minWidth:"100vw",
    position:"fixed",
    top:"8vh",
    maxHeight:"73%",
    overflow:"scroll",
    overflowX:"hidden",
    "&::-webkit-scrollbar":{
      background:"transparent",
    },


  },

  myMessagesCard: {
    minWidth: "50vw",
    maxWidth: "50vw",
    marginTop: "20px",

    ...theme.mixins.gutters(),
    paddingTop: ".2px",
    paddingBottom: ".2px",

    marginLeft: "38vw",
    wordWrap: "break-word",
    background: "#336242",

  },
  strMessagesCard: {
    minWidth: "50vw",
    maxWidth: "50vw",
    marginTop: "20px",

    ...theme.mixins.gutters(),
    paddingTop: ".2px",
    paddingBottom: ".2px",
    wordWrap: "break-word",
    background: "#ffffff",

  },

  message: {
    color: "white",
    fontSize: "15px",
    outline:"none",
  },
  strMessage: {
    color: "black",
    fontSize: "17px",
    outline:"none",
  },
  noOutline:{
    outline:"none",
  },
  messageList:{


  }
});

class MessageList extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}  elevation={1}>
        <ul className={classes.messageList}>

          {this.props.messages.map((message, index, arr) => {
            return (
              <li  tabIndex={-1} ref={(index + 1) === arr.length ? this.props.messageRef : undefined} className={classes.noOutline}  key={message.id} >
                <Paper  className={message.fromStr ? classes.strMessagesCard : classes.myMessagesCard}>

                  <p   className={message.fromStr ? classes.strMessage : classes.message}>
                    {message.text}
                  </p>

                </Paper>
              </li>
            );
          })}



        </ul>


      </div>
    );
  }
}
MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addMessageFunc:PropTypes.func.isRequired,
  addStrMessage:PropTypes.func.isRequired,
};

export default withStyles(styles)(MessageList);
