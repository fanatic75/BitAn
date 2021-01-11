import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function Enter() {
  const [answer,setAnswer] = React.useState("");
  const [error,setError] = React.useState(false);
  const [helperText,setHelperText] = React.useState("");
  const handleClose = () => {
    if(answer.toLowerCase().trim()==="quad")
    window.open("http://localhost:8080/start-chat","_self");
    else{
        setError(true);
        setHelperText("Answer is wrong. Are you from BIT?");
    }

  };

  return (
   
     
      <Dialog open={true} disableBackdropClick={true}>
        <DialogTitle id="form-dialog-title">Answer Question</DialogTitle>
        <DialogContent>
           <Typography variant="body1">
           What is the bottom most floor of BIT called as?
           </Typography>
          <TextField
            autoFocus
            error={error}
            helperText={helperText}
            margin="dense"
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
            label="Answer"
            
          />
          <Typography style={{position:"relative",top:"34px"}} component="span">rangle</Typography>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}
