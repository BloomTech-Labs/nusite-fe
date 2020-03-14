import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/homepage/LoginForm';
import Home from './components/homepage/Home';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
    </Switch>
  </Router>
);

export default AppRouter;