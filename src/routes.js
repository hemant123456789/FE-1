import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from '../src/components/SignUp'; 
import Login from '../src/components/Login';
import ResetPassword from '../src/components/ResetPassword';
// your components
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const MissingPage = () => <h1>404</h1>;
const SignUpForm = ({SignUp}) => <>(SignUp)</>;


const routes = (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/about" component={About} />
    <Route path="/signup" component={SignUp} />
    <Route path="/reset" component={ResetPassword} />
  </Switch>
);

export default routes;