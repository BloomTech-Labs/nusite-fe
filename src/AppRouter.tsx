import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./views/login/Login";
import { Registration } from "./views/registration/Registration";
import Home from "./views/marketing-page/Home";
import PrivateRoute from "./views/util/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";

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
