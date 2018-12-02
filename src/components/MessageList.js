import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    minWidth:"99vw",
    position:"fixed",
    bottom:"0vh",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 9,
    minHeight: "75vh",
    maxHeight:"75vh",
    overflow:"scroll",
    overflowX:"hidden",
    "&::-webkit-scrollbar":{
      background:"transparent",
    }
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
    fontSize: "20px",
    outline:"none",
  },
  strMessage: {
    color: "black",
    fontSize: "20px",
    outline:"none",
  }
});

class MessageList extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <Paper className={classes.root}  elevation={1}>
        <ul className="message-list">

          {this.props.messages.map((message, index, arr) => {
            return (
              <li key={message.id} >
                <Paper className={message.fromStr ? classes.strMessagesCard : classes.myMessagesCard}>

                  <p tabIndex={-1} ref={(index + 1) === arr.length ? this.props.messageRef : undefined} className={message.fromStr ? classes.strMessage : classes.message}>
                    {message.text}
                  </p>

                </Paper>
              </li>
            );
          })}



        </ul>


      </Paper>
    );
  }
}
MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,

};

export default withStyles(styles)(MessageList);
