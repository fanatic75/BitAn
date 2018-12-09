import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import io from 'socket.io-client';
const socket = io.connect({autoConnect: false});
const styles = theme => ({
  container: {

    background: "#fff7ee",

    position:"fixed",
    bottom:"0px",

    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "99.99%",

  },
  textField: {
    margin: theme.spacing.unit,
    marginBottom: "2px",
    width: "70%",




  },
  buttonSend: {
    marginBottom: "2px",
    marginRight: theme.spacing.unit,
    color: "#ffffff ",
    width: "50px",

  },
  buttonChat: {
    background: "#336242",
    margin: theme.spacing.unit,
    color:"#ffffff",
  },
  rightIcon:{
    transform:"rotate(333deg)",
  }

});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#336242",
    },
    secondary: {
      main: "#ffffff",

    },
  },
  typography: {
    useNextVariants: true,
  },
});

class BottomMessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "STOP",
      message: '',
      firstMessage: false,
      stateInput:false,
    }
    socket.on("chatMessage", msg => {
      this.props.addStrMessage(msg);
    });
    socket.on("newChat", () => {
      this.setState({value:"New Chat",stateInput:true,});
    });
    socket.on("closeStrangerSocket",() => {
      socket.close();
    });


    this.buttonToggle = this.buttonToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendOnEnter = this.sendOnEnter.bind(this);

  }

  componentDidMount() {
    socket.open();
  }

  handleSubmit(evtOrMessage) {
    if (evtOrMessage.target) {

      evtOrMessage.preventDefault();
      this.setState({
        message: '',

      });
      if (this.state.message.trim().length >0) {

        this.props.addMessageFunc(this.state.message);
        socket.emit("chatMessage", this.state.message);

        this.setState({
          firstMessage: true,
        });
      }
      //Do something with target
    }
    else  {

      this.props.addMessageFunc(evtOrMessage);
      socket.emit("chatMessage", evtOrMessage);

      this.setState({
        message: '',
        firstMessage: true,
      });

    }

  }





  sendOnEnter(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (e.target.value && e.target.value.toString().trim().length > 0)
        this.handleSubmit(e.target.value);
    }
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  };
  buttonToggle() {
    if (this.state.value === "STOP") {
      this.setState({
        value: "Really?",
      });
    } else if (this.state.value === "Really?") {

      socket.close();

      this.setState({
        value: "New Chat",
        stateInput:true,
      });
    } else {
      this.setState({
        value: "STOP",
        firstMessage: false,
        stateInput:false,
      });
      this.props.clearScreen();
      socket.open();

    }
  }



  render() {


    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>

        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}>

          <Button onClick={this.buttonToggle}
            variant="contained"
            color="primary"
            aria-label="Stop/New-Chat"
            className={classes.buttonChat}>
            {this.state.value}
          </Button>

          <TextField
            inputRef={this.props.myRefProp}
            disabled={this.state.stateInput}
            id="outlined-required"
            label={this.state.firstMessage ? "Type your message" : "Say hello to stranger"}
            multiline
            onChange={this.handleChange}
            rowsMax="4"
            value={this.state.message}
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onKeyDown={this.sendOnEnter}
          />

          <Button
            variant="fab"
            type="submit"
            size="small"
            color="primary"
            aria-label="send"
            className={classes.buttonSend}>
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </form>


      </MuiThemeProvider>
    );
  }

}

BottomMessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
  addMessageFunc: PropTypes.func.isRequired,
  addStrMessage:PropTypes.func.isRequired,
  clearScreen:PropTypes.func.isRequired,
};

export default withStyles(styles)(BottomMessageBar);
