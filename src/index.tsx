import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import AppProviders from "./AppProviders";
import CircularProgress from "@material-ui/core/CircularProgress";
import LoadingScreen from "./views/_shared/LoadingScreen";
const AppProviders = lazy(() => import("./AppProviders"));
//import { Loader } from "./views/_shared/Loader";

ReactDOM.render(
   <Suspense fallback={<LoadingScreen />}>
      <AppProviders />
   </Suspense>,
   document.getElementById("root")
);
