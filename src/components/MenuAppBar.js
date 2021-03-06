import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import AboutUsDialog from "./AboutUsDialog";
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    marginLeft: "50px"
  },
  appBarPosition: {
    position: "fixed",
    top: "0px",

  },

};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#d5b138",
      custom: "#ff0000"
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    donateOpen: false,
    aboutUs: false,
  };


  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget,

    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
 
  donateToggle = () => {
    this.setState(
      {
        donateOpen: !this.state.donateOpen,
        anchorEl: null,

      });

  };
  aboutUsToggle = () => {
    this.setState(
      {
        aboutUs: !this.state.aboutUs,
        anchorEl: null,

      });

  };


  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <MuiThemeProvider theme={theme}>
          <AppBar className={classes.appBarPosition} color="primary">

            <Toolbar>
              <Typography variant="h4" color="secondary" align="center" className={classes.grow}>
                BIT Chat
            </Typography>
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="secondary"

                  >
                    <MoreIcon />
                  </IconButton>
                  <Menu

                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}

                  >
                   {/** <MenuItem onClick={this.dialogToggle}>

                      Sexual Preference
                  </MenuItem>
                    **/}
                    {/** <MenuItem onClick={this.donateToggle}>Donate</MenuItem>*/}
                    <MenuItem onClick={this.aboutUsToggle}>AboutUS</MenuItem>
                  </Menu>
                  {/** <DonateDialog donateToggle={this.donateToggle} donateOpen={this.state.donateOpen} />*/}
                  <AboutUsDialog aboutUsToggle={this.aboutUsToggle} aboutUs={this.state.aboutUs} />
                </div>
              )}
            </Toolbar>

          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
