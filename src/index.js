import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from "./routes";
import {Provider} from 'react-redux';
import store from '../src/redux/store';
// initialize rotues and navi links
const initRoutes = () => (
  <Router>
    <div>
    <React.Fragment>
      <Provider store={store} >
         <App />,
         {routes}
      </Provider>
    </React.Fragment>,
     
    </div>
  </Router>
);
const initializedRoutes = initRoutes();
ReactDOM.render(
  initializedRoutes,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
