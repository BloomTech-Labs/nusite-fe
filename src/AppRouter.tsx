import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Registration } from "./components/registration/Registration";
import Home from "./components/marketing-page/Home";
import PrivateRoute from "./components/util/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

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
