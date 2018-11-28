import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
const styles = {
  appBar: {
    position: "fixed",
    top:"0px",

  },

  flex: {
    flex: 1,
    marginRight:"50px",
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DonateDialog extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.donateOpen}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar} color="primary">
            <Toolbar>
              <IconButton
                color="secondary"
                onClick={this.props.donateToggle}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.flex}
                align="center"
              >
                BitChat
              </Typography>
            </Toolbar>
          </AppBar>
          <h2 style={{color:"black",textAlign:"center",fontSize:"60px",paddingTop:"20px",fontWeight:"400"}}> Donate </h2>
        </Dialog>
      </div>
    );
  }
}

DonateDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  donateOpen: PropTypes.bool.isRequired,
  donateToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(DonateDialog);
