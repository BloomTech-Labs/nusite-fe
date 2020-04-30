import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./views/login/Login";
import { Registration } from "./views/registration/Registration";
import Logout from "./views/_shared/Logout";
import Home from "./views/home/Home";
import PrivateRoute from "./views/util/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";
import LoadingScreen from "./views/_shared/LoadingScreen";

//import Header from "./views/_shared/header/Header";
import Footer from "./views/_shared/footer/Footer";
const Header = React.lazy(() => import("./views/_shared/header/Header"));

const App = () => (
   <React.Suspense fallback={LoadingScreen}>
      <>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/home" component={Dashboard} />
         </Switch>
         <Footer />
      </>
   </React.Suspense>
);

export default App;
