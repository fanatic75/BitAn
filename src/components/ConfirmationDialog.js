import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Switch from "./Switch";


const styles = theme => ({

  paper: {
    width: "70%",
    maxHeight: 435
  }
});

class ConfirmationDialog extends React.Component{
  constructor(props){
    super(props);
    this.state={
      switchOn:false,
    };
    this.switchToggle = this.switchToggle.bind(this);
  }
    switchToggle = () => {
      this.setState({
        switchOn:!this.state.switchOn
      });
    };
    render(){
      const { classes } = this.props;
      return(
        <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          maxWidth="lg"
          aria-labelledby="confirmation-dialog-title"
          open={this.props.dialogOpen}

          classes={{paper: classes.paper}}
        >
        <DialogTitle id="confirmation-dialog-title">
          Sexual Preference
        </DialogTitle>
        <DialogContent>
          <Switch switchOn={this.state.switchOn} switchToggle={this.switchToggle} />
        </DialogContent>
        <DialogActions>

          <Button  onClick={this.props.dialogToggle} color="primary">
            Ok
          </Button>
        </DialogActions>
        </Dialog>
        </div>

      );
    }
};

ConfirmationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  dialogToggle:PropTypes.func.isRequired,
  dialogOpen:PropTypes.bool.isRequired,
};

export default  withStyles(styles)(ConfirmationDialog);
