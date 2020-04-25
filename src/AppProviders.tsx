import React, { useState } from "react";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import { ThemeContext } from "./context/contexts";
import { BrowserRouter as Router } from "react-router-dom";

const cache = new InMemoryCache();

const client = new ApolloClient({
   uri:
      process.env.STAGING_LINK ||
      "https://partnerd-staging.herokuapp.com/graphql",
   cache,
});

const AppProviders = () => {
   return (
      <ApolloProvider client={client}>
         <ThemeProvider theme={theme}>
            <Router>
               <App />
            </Router>
         </ThemeProvider>
      </ApolloProvider>
   );
};

export default AppProviders;
