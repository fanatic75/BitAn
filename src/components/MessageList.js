import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
const styles = theme => ({
  root: {
    minWidth: "100vw",
    position: "fixed",
    top: "9%",
    maxHeight: "75%",
    overflow: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      background: "transparent",
    },


  },

  myMessagesCard: {
    minWidth: "50vw",
    maxWidth: "50vw",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    ...theme.mixins.gutters(),
    paddingTop: ".2px",
    paddingBottom: ".2px",

    marginLeft: "38vw",
    wordBreak: "break-word",
    background: "#000000",

  },
  strMessagesCard: {
    minWidth: "50vw",
    maxWidth: "50vw",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    ...theme.mixins.gutters(),
    paddingTop: ".2px",
    paddingBottom: ".2px",
    wordBreak: "break-word",
    background: "#336242",

  },

  message: {
    color: "#ffffff",
    fontSize: "13px",
    display: "inline",
    outline: "none",
  },
  strMessage: {
    color: "#ffffff",
    display: "inline",
    fontSize: "13px",
    outline: "none",
  },
  noOutline: {
    outline: "none",
  },
  avatar: {
    margin: "10px 10px 10px 0",
    display: "inline-flex",
    background: "#d5b138",
    color: "#000000",
  }

});

class MessageList extends React.Component {

  render() {
    const { classes } = this.props;

    if (this.props.messages.length!==0) {
      return (
        <div className={classes.root} elevation={1}>
          <ul>
            {this.props.messages.map((message, index, arr) => {
              return (
                <li tabIndex={-1} ref={(index + 1) === arr.length ? this.props.messageRef : undefined} className={classes.noOutline} key={message.id} >
                  <Paper className={message.fromStr ? classes.strMessagesCard : classes.myMessagesCard}>

                    {message.fromStr && <Avatar className={classes.avatar}>S</Avatar>}
                    {!message.fromStr && <Avatar className={classes.avatar}>Y</Avatar>}

                    <p className={message.fromStr ? classes.strMessage : classes.message}>
                      {message.text}
                    </p>

                  </Paper>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else{
      return(
        <div className={classes.root} elevation={1}>
          <Paper className={classes.strMessagesCard}>
            <p className={classes.strMessage}> Looking for a random stranger. Please Wait.</p>
          </Paper>
        </div>
      );
    }
  }
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addMessageFunc: PropTypes.func.isRequired,
  addStrMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(MessageList);
