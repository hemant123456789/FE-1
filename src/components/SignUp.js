import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { deepOrange } from '@material-ui/core/colors';
// Required imports from the example.
import {  InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        HEMANT2747
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      mode: 'all',
      reValidateMode: 'all',
      defaultValues: {
        name: null,
      email:null,
      phone: null,
      password: null,
      address: null,
      },
    }
  );
  const [state, setState] = useState({
      name: null,
      email:null,
      phone: null,
      password: null,
      address: null
  });

  // Add these variables to your component to track the state
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const onSubmit = (data) => {
    console.log(errors);
   console.log('data ***************', data);
   console.log('state************', state)
    
  }
  const onError = (errors, e) => console.log(errors,e);
  
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="filled"
                required
                fullWidth
                id="name"
                value={state.name || ''}
                label="Name" inputProps={{
                  autoComplete: 'none'
               }}
               error={errors.name instanceof Object ? true : false}
               helperText={errors.name   && 'Name is required '}
                {...register('name',  { required: true })}  
                onChange={e => {
                  handleInputChange(e);
              }}
              />
            </Grid>
           {/*  <Grid item xs={12} sm={6}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                {...register('lName',  { required: true })}  
                />
  </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                error={errors.email instanceof Object ? true : false}
                value={state.email || ''}
                helperText={errors.email && 'Email is required '}
                fullWidth
                id="email"
                label="Email"
                name="email"
                inputProps={{
                  autoComplete: 'none'
               }}
                {...register('email',  { required: true })}  
                onChange={e => {
                  handleInputChange(e);
              }}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="filled"
                required
                value={state.phone || ''}
                error={errors.phone instanceof Object ? true : false}
                helperText={errors.phone && 'Phone is required '}
                fullWidth
                id="phone"
                label="phone"
                name="phone"  
                inputProps={{
                  autoComplete: 'none'
               }}
                {...register('phone',  { required: true })}  
                onChange={e => {
                  handleInputChange(e);
              }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="filled-multiline-static"
                label="Address"
                multiline
                rows={4}
                fullWidth
                variant="filled"
                value={state.address || ''}
                error={errors.address instanceof Object ? true : false}
                helperText={errors.address && 'Address is required '}
                name="address"
                label="address"
                inputProps={{
                  autoComplete: 'none'
               }}
                id="address"
                {...register('address',  { required: true })}  
                onChange={e => {
                  handleInputChange(e);
              }}

            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                value={state.password || ''}
                error={errors.password instanceof Object ? true : false}
                helperText={errors.password && 'Password is required '}
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                inputProps={{
                  autoComplete: 'none'
               }}
                id="password"
                {...register('password',  { required: true })}  
                onChange={e => {
                  handleInputChange(e);
              }}
              InputProps={{ // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink}  to='/'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}