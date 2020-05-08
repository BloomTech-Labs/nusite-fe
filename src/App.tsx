import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyles from "./theme/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./views/login/Login";
import { Registration } from "./views/registration/Registration";
import Logout from "./views/_shared/Logout";
import Home from "./views/home/Home";
import PrivateRoute from "./views/util/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";
import LoadingScreen from "./views/_shared/LoadingScreen";
import Footer from "./views/_shared/footer/Footer";
import { InitiateReset } from "./views/reset/InitiateReset";
import { FinalizeReset } from "./views/reset/FinalizeReset";
import DashboardGoogle from "./views/dashboard/DashboardGoogle";

const Header = React.lazy(() => import("./views/_shared/header/Header"));

const App = () => (
   <React.Suspense fallback={<LoadingScreen />}>
      <CssBaseline />
      <GlobalStyles />
      <div className="App">
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/initiate" component={InitiateReset} />
            <PrivateRoute exact path="/_reset" component={FinalizeReset} />
            <PrivateRoute exact path="/home" component={Dashboard} />
         </Switch>
         <Footer />
      </div>
   </React.Suspense>
);

export default App;
