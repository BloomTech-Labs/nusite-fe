import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Login} from './components/LoginForm/Login';
import {Registration} from './components/RegistrationForm/Registration';
import Home from './components/homepage/Home';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
    </Switch>
  </Router>
);

export default AppRouter;