import React from "react";
import { Route, Router } from 'react-router';
import App from "./containers/App";
import PasswordForm from './containers/PasswordForm'

export default
  <Router>
    <Route path="/:playlist"
           component={App} />
    <Route path="/:type/:playlist"
          component={PasswordForm} />
  </Router>
