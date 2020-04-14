import * as React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./views/login/Login";
import { Registration } from "./views/registration/Registration";
import Logout from "./views/_shared/Logout";
import Home from "./views/home/Home";
import PrivateRoute from "./views/util/PrivateRoute";
import Dashboard from "./views/dashboard/Dashboard";

// const AuthContext = React.createContext({ any: "" });

// const initialState = {
//    isAuthenticated: false,
//    token: null,
// };

// const reducer = (state: any, action: any) => {
//    switch (action.type) {
//       case "LOGIN":
//          localStorage.setItem("token", JSON.stringify(action.payload.token));
//          return {
//             ...state,
//             isAuthenticated: true,
//             token: action.payload.token,
//          };
//       case "LOGOUT":
//          localStorage.clear();
//          return {
//             ...state,
//             isAuthenticated: false,
//          };
//       default:
//          return state;
//    }
// };

function App() {
   // const [state, dispatch] = React.useReducer(reducer, initialState);
   return (
      <>
         {/* <AuthContext.Provider{{...state:any}}>
            value=
            {{
               state,
               dispatch,
            }}
            > */}
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/home" component={Dashboard} />
         </Switch>
         {/* <div className="App">
               {!state.isAuthenticated ? <Login /> : <Home />}
            </div>
         </AuthContext.Provider> */}
      </>
   );
}

export default App;
