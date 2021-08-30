import React from 'react';
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = false;
   // localstoarge.getItem()
  
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
}

export default ProtectedRoute;