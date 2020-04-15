import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./views/login/Login";
import { Registration } from "./views/registration/Registration";
import Logout from "./views/_shared/Logout";
import Home from "./views/home/Home";
import PrivateRoute from "./views/util/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";

function App() {
   return (
      <>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/home" component={Dashboard} />
         </Switch>
      </>
   );
}

export default App;
