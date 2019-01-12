import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Slide from "@material-ui/core/Slide";
import Footer from "./Footer";
import AboutUsAnimation from "./AboutUsAnimation";
const styles = {

  ArrowBackIos: {
    width: "10%",
    position: "fixed",
    top: "47px",
    color: "#d5b138",
  },
  Heading: {
    textAlign: "center",
    marginTop: "21px",
    color: "#d5b138",
  }
};
const theme = createMuiTheme({
  overrides: {
    MuiPaper: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#000', // Some CSS
      },
    },
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AboutUsDialog extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Dialog
            fullScreen
            open={this.props.aboutUs}
            TransitionComponent={Transition}

          >
            <IconButton

              onClick={this.props.aboutUsToggle}
              aria-label="Close"
              className={classes.ArrowBackIos}
            >
              <ArrowBackIos />
            </IconButton>
            <Typography className={classes.Heading} variant="h3" gutterBottom>
              About US
            </Typography>
            <AboutUsAnimation  />
            <Footer />
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

AboutUsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  aboutUs: PropTypes.bool.isRequired,
  aboutUsToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(AboutUsDialog);
