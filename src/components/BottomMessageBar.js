import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Icon from '@material-ui/core/Icon';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import io from 'socket.io-client';
const socket = io.connect({autoConnect: false,});
const disconnectMsg="You have disconnected the chat. Please start a New Chat to start chatting with a random Stranger.";
const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background:"#000000",
  },
  toolbar: {
    alignItems:"flex-end",
  },
  textField: {
    boxShadow:"0.5px 0.5px 8px 3px #888888",
    margin:"auto",
    width:"100%",
    borderRadius: "25px",
    borderColor:"#ffffff",
    border:"2px",
    borderStyle:"solid",
    height: "45px",
    outline:"none",
    resize:'none',
    overflow:"auto",
    "&::-webkit-scrollbar":{
      background:"transparent",
    },
    "&::-webkit-input-placeholder":{
      fontFamily:"monospace",
      color: "grey",
      fontSize:"11px",
    },
    paddingBottom:"20px",
    paddingTop:"10px",
    paddingRight:"20px",
    paddingLeft:"20px",
  },
  buttonSend: {
    marginTop:"auto",
    marginBottom: "auto",
    marginLeft:"9px",
    marginRight:"-1.3%",
    color: "#d5b138",
    minHeight:"9px",
    minWidth:"31px",
    width:"60px",
    height:"45px",
  },
  buttonChat: {
    marginBottom:"10px",
    background: "#000000",
    color:"#d5b138",
    marginRight:"4px",
    marginLeft:"-10px",
  },
  rightIcon:{
    marginLeft:"5px",
    marginBottom:"3px",
    transform:"rotate(333deg)",
  }

});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
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
      stateButton:false,
    }
    socket.on("chatMessage", msg => {
      this.props.addStrMessage(msg);
    });
    socket.on("newChat", () => {
      this.setState({value:"New Chat",stateInput:true,stateButton:true,});
    });
    socket.on("closeStrangerSocket",() => {
      socket.close();
    });
    socket.on('reconnect_attempt', (attemptNumber) => {
      this.props.addMessageFunc("You have been disconnected because the tab was Idle.");
      socket.close();
      this.setState({
        value: "New Chat",
        stateInput:true,
        stateButton:true,
      });
    });

    this.messageField=React.createRef();
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
        this.messageField.current.focus();
        this.props.addMessageFunc(this.state.message);
        socket.emit("chatMessage", this.state.message);

        this.setState({
          firstMessage: true,
        });
      }
      //Do something with target
    }
    else  {
      this.messageField.current.focus();
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
        stateButton:true,
      });
      this.props.addMessageFunc(disconnectMsg);
    } else {
      this.setState({
        value: "STOP",
        firstMessage: false,
        stateInput:false,
        stateButton:false,
      });
      this.props.clearScreen();
      socket.open();

    }
  }



  render() {


    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
      <React.Fragment>
      <CssBaseline />

        <form
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}>
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
          <Button onClick={this.buttonToggle}
            variant="contained"
            color="primary"
            aria-label="Stop/New-Chat"
            className={classes.buttonChat}>
            {this.state.value}
          </Button>


          <textarea
          type="text"
           cols="10"
           rows="1"
           ref={this.messageField}
           placeholder={this.state.firstMessage ? "Type your message" : "Say hello to stranger"}
           className={classes.textField}
           disabled={this.state.stateInput}
           value={this.state.message}
           onChange={this.handleChange}
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

          </Toolbar>
       </AppBar>
        </form>

        </React.Fragment>
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
