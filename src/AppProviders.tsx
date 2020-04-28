import React, { useReducer } from "react";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router } from "react-router-dom";
import User_Data_Reducer from "./context/user/reducer";
import { UserData, UserDispatch } from "./context/user/context";

const cache = new InMemoryCache();

const client = new ApolloClient({
   uri:
      process.env.STAGING_LINK ||
      "https://partnerd-staging.herokuapp.com/graphql",
   cache,
});

const AppProviders = () => {
   const [userData, userDispatch] = useReducer(User_Data_Reducer, null);

   return (
      <ApolloProvider client={client}>
         <ThemeProvider theme={theme}>
            <UserDispatch.Provider value={userDispatch}>
               <Router>
                  <App />
               </Router>
            </UserDispatch.Provider>
         </ThemeProvider>
      </ApolloProvider>
   );
};

export default AppProviders;
