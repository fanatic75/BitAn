import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { Link } from "react-router-dom";
import "../tour.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
    },
    container: {
      marginTop: theme.spacing(2),
    },
    accordian: {
      padding: theme.spacing(1),
      backgroundColor: "black",
      color: "#d5b138",
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    button: {
      float: "right",
    },
    footer:{
        margin:theme.spacing(2),
        marginRight:theme.spacing(4),
    }
  })
);

export default function Tour() {
  const faqs = [
    {
      question: "What is BIT CHAT?",
      answer:
        "BIT CHAT is an Anonymous chatting client. You are matched up with a stranger where you can chat with the stranger for as long as you don't diconnect or the stranger doesn't.",
    },
    {
      question: "How does it work?",
      answer:
        "Once you reach the chatting page wait for stranger to connect. Once stranger is connected with you, you should be able to type in message and say Hello.",
    },
    {
      question: "Can anyone else see my chat with Stranger?",
      answer:
        "No. Your chat is shared only with the stranger and no one else. There is no record whatsoever of your chat history.",
    },
    {
      question: "Is the matching random to the stranger?",
      answer:
        "Yes. Once you start chatting, our Algorithm matches you with the next stranger waiting for a matchup.",
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        <Typography component="div" variant="h2">
          FAQ
        </Typography>
      </header>
      <Container className={classes.container} maxWidth="lg">
        {faqs.map((faq) => {
          return (
            <Accordion className={classes.accordian}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
      <footer className={classes.footer}>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/enter"
        >
          <Button className={classes.button} color="primary" variant="outlined">
            Next
          </Button>
        </Link>
      </footer>
    </div>
  );
}
