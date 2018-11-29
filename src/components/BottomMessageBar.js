import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const styles = theme => ({
  container: {
    position:"fixed",
    background:"white",
    bottom:"0px",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"flex-end",
    width:"99.99%",
  },
  textField: {
    margin:theme.spacing.unit,
    marginBottom:"2px",
    width:"70%",


  },
  buttonSend: {
        marginBottom:"2px",
        marginRight:theme.spacing.unit,
    color:"white",
    width:"50px",

  },
  buttonChat: {
    color:"#d5b138",

    margin: theme.spacing.unit,
  },

});
const theme= createMuiTheme({
  palette: {
    primary: {
      main:"#00562a",
    },
    secondary: {
      main:"#000000",
      custom:"#ff0000",
    },
  },
  typography: {
    useNextVariants: true,
  },
});



class BottomMessageBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:"STOP",
      message: '',
      firstMessage:false,
    }
    this.buttonToggle=this.buttonToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
      
    this.setState({
      message: '',
      firstMessage:true,
    })
  }

  handleChange (event) {
    this.setState({
      message: event.target.value,
    });
  };
  buttonToggle(){
    if(this.state.value==="STOP"){
        this.setState({
          value:"Really?",
        });
      }else if (this.state.value==="Really?") {
        this.setState({
          value:"New Chat",
        });
      } else{
        this.setState({
          value:"STOP",
          firstMessage:false,
        })
      }
  }

  render() {
    const { classes } = this.props;

    return (
    <MuiThemeProvider theme={theme}>

        <form className={classes.container}   noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Button onClick={this.buttonToggle} variant="contained" color="secondary"  aria-label="Stop/New-Chat" className={classes.buttonChat}>

            {this.state.value}
      </Button>
        <TextField
          required={true}
          id="outlined-required"
          label={this.state.firstMessage?"Type your message":"Say hello to stranger"}
          multiline
          onChange={this.handleChange}
          rowsMax="4"
          value={this.state.message}
          className={classes.textField}
          margin="dense"
          variant="outlined"
        />

          <Button variant="fab" type="submit" size="small" color="primary"  aria-label="send" className={classes.buttonSend}>
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
      </form>


  </MuiThemeProvider>
    );
  }
}

BottomMessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomMessageBar);
