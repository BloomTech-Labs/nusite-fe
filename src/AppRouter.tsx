import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Login} from './components/LoginForm/Login';
import {Registration} from './components/RegistrationForm/Registration';
import Home from './components/homepage/Home';
import { PrivateRoute } from './components/routes/PrivateRoute';
import Dashboard from './components/homepage/Dashboard';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Registration} />
      <PrivateRoute exact path="/home" component={Dashboard} />
    </Switch>
  </Router>
);

export default AppRouter;