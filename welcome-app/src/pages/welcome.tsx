import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Slide,
  Theme,
  Typography,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalButtons: {
      justifyContent: "space-between",
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export function Welcome() {
  const classes = useStyles();

  const [isWelcomeModelOpen, setIsWelcomeModelOpen] = React.useState(true);
  return (
    <Dialog
      open={isWelcomeModelOpen}
      TransitionComponent={Transition}
      disableBackdropClick={true}
      onClose={() => setIsWelcomeModelOpen(false)}
    >
      <DialogContent>
        <Typography style={{ position: "relative" }}>Hello! 👋</Typography>
        <Typography>
          Welcome to
          <Typography
            variant="h4"
            component="span"
            style={{ color: "#d5b138", fontFamily: "Alex Brush" }}
          >
            {"   "}B
          </Typography>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#d5b138" }}
          >
            IT
          </Typography>
          <Typography
            variant="h4"
            component="span"
            style={{ color: "#d5b138", fontFamily: "Alex Brush" }}
          >
            {"   "}C
          </Typography>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#d5b138" }}
          >
            HAT
          </Typography>
        </Typography>
        <br />
        <Typography variant="caption">
          Would you like to take a tour of how it works?
        </Typography>
      </DialogContent>
      <DialogActions className={classes.modalButtons}>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/enter"
        >
          <Button color="primary">Skip Tour</Button>
        </Link>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/tour"
        >
          <Button color="primary">Next</Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}

export default Welcome;
