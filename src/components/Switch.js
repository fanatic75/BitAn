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
  constructor(props) {
    super(props);
    this.state = {
      OppositeSex: this.props.OppositeSex,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {

    this.setState({
      OppositeSex: !this.state.OppositeSex,
    });

  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Switch checked={this.state.OppositeSex} onChange={this.handleChange} />
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
