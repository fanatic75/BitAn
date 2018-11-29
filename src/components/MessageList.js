import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  root: {

    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 9,
    marginBottom: theme.spacing.unit * 9,
    minHeight:"70vh",

  },
  card: {
   maxWidth: "60vw",
   marginTop:"20px",
   fontSize:"14px",
   ...theme.mixins.gutters(),
   paddingTop:".2px",
   paddingBottom:".2px",
   marginRight:"30px",
   wordWrap:"break-word",
 },
});

class MessageList extends React.Component {

render(){

    const { classes } = this.props;
    return (

        <Paper className={classes.root} elevation={1}>
        <ul className="message-list">
          {this.props.messages.map(message => {
            return (
              <li key={message.id++}>
                <Paper className={classes.card}>

                    <p>
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
  messages:PropTypes.array.isRequired,
};

export default withStyles(styles)(MessageList);
