import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
const styles = {
  root: {
    width: "100%",
    background:"black",
    borderRadius:"10px",
    position:"absolute",
    bottom:"2px",
    
  },
  footer:{
    color:"#d5b138",
    margin:"auto"
  }
};

class footer extends React.Component {


  

  render() {
    const { classes } = this.props;
   

    return (
      <BottomNavigation
        showLabels
        className={classes.root}
      >
        <Typography className={classes.footer} variant="h6" gutterBottom>
          Created by Prateek Banga
      </Typography>
      </BottomNavigation>
    );
  }
}

footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(footer);
