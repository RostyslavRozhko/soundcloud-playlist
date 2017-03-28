import React from "react";
import { Route, Router } from 'react-router';
import App from "./containers/App";
import PasswordForm from './containers/PasswordForm'
import PublicForm from './containers/PublicForm'

export default
  <Router>
    <Route path="/:playlist"
           component={App} />
    <Route path="/s/:playlist"
          component={PasswordForm} />
    <Route path="/p/:playlist"
          component={PublicForm} />
  </Router>
