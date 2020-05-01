import React, { useReducer } from "react";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router } from "react-router-dom";
import UserReducer from "./context/user/reducer";
import UserContext, { ANONYMOUS_USER } from "./context/user/context";

const cache = new InMemoryCache();

const client = new ApolloClient({
   uri:
      process.env.STAGING_LINK ||
      "https://partnerd-staging.herokuapp.com/graphql",
   cache,
});

const AppProviders = () => {
   const [userData, userDispatch] = useReducer(UserReducer, ANONYMOUS_USER);

   return (
      <ApolloProvider client={client}>
         <ThemeProvider theme={theme}>
            <UserContext.Provider value={{ userData, userDispatch }}>
               <Router>
                  <App />
               </Router>
            </UserContext.Provider>
         </ThemeProvider>
      </ApolloProvider>
   );
};

export default AppProviders;
