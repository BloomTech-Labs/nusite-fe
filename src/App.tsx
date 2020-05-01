import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./views/login/Login";
import { Registration } from "./views/registration/Registration";
import Logout from "./views/_shared/Logout";
import Home from "./views/home/Home";
import PrivateRoute from "./views/util/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";
import Header from "./views/_shared/header/Header";
import Footer from "./views/_shared/footer/Footer";
import { InitiateReset } from "./views/reset/InitiateReset";
import { FinalizeReset } from "./views/reset/FinalizeReset";
import DashboardGoogle from "./views/dashboard/Dashboard";

const App = () => (
   <>
      <Header />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/register" component={Registration} />
         <Route exact path="/logout" component={Logout} />
         <Route exact path="/initiate" component={InitiateReset} />
         <PrivateRoute exact path="/_reset" component={FinalizeReset} />
         <PrivateRoute exact path="/home" component={Dashboard} />
         <PrivateRoute exact path="/homeg" component={DashboardGoogle} />
      </Switch>
      <Footer />
   </>
);

export default App;
