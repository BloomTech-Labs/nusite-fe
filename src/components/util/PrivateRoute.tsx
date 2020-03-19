// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 // Use a render prop so our component is computed,
//                 // allowing our token value to be set and deleted over time
//                 if (localStorage.getItem("token")) {
//                     return <Component{...props} />
//                 }
//                 return <Redirect to='/login' />
//             }}
//         />
//     )
// }

// export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
   const routeComponent = (props: any) =>
      isAuthenticated ? (
         React.createElement(component, props)
      ) : (
         <Redirect to={{ pathname: "/login" }} />
      );
   return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
