import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'
import {setMessage} from '../redux/actions/messageAction';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Toaster() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const selector = useSelector(state => state.message);
  const[msgObj, setMsgObj] = React.useState(selector);
  const dispatch = useDispatch();
  useEffect( ()=>{
    if(selector.flag) {
      setOpen(true);
    } else {
      setOpen(false)
    }
    setMsgObj(selector);
  },[selector]);

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center'}}   open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={msgObj.type}>
          {msgObj.message}
        </Alert>
      </Snackbar>
    </div>
  );
}