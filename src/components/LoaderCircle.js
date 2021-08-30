
import React, {useState, useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function LoaderCircle() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const selector = useSelector(state => state.loader);

  useEffect( ()=>{
    if(selector) {
      setOpen(true);
    } else {
      setOpen(false)
    }
  },[selector]);

  const handleClose = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress size={60}
        left={-20}
        top={10}
        status={'loading'}
        style={{marginLeft: '0%'}} />
      </Backdrop>
    </div>
  );
}