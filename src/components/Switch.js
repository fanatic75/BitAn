import React from "react";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "inline",
    fontSize: "18px"
  }
};

class Switches extends React.Component {



  render() {
    const { classes } = this.props;
    return (
      <div>
        <Switch checked={this.props.switchOn} onChange={this.props.switchToggle} />
        <Typography
          classes={{
            root: classes.root
          }}
        >
          Opposite Sex
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Switches);
