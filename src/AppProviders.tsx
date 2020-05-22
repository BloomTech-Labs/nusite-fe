import React, { useReducer } from "react";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { APOLLO_CLIENT_URL } from "./clientConfig";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import UserReducer from "./context/user/reducer";
import UserContext, { ANONYMOUS_USER } from "./context/user/context";

const cache = new InMemoryCache();

const client = new ApolloClient({
   uri: APOLLO_CLIENT_URL,
   cache,
});

const AppProviders = () => {
   const [userData, userDispatch] = useReducer(UserReducer, ANONYMOUS_USER);

   console.log(`Client URL: ${APOLLO_CLIENT_URL}`);
   return (
      <ApolloProvider client={client}>
         <ThemeProvider theme={theme}>
            <UserContext.Provider value={{ userData, userDispatch }}>
               <CookiesProvider>
                  <Router>
                     <App />
                  </Router>
               </CookiesProvider>
            </UserContext.Provider>
         </ThemeProvider>
      </ApolloProvider>
   );
};

export default AppProviders;
