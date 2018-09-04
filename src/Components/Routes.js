import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

export function PrivateRoute ({component: Component, authenticated, ...props}) {
  return (
    <Route
      {...props}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}