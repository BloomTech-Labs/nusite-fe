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
   const [darkMode, setDarkMode] = useState(false);
   const globalTheme = {
      darkMode,
      // can even pass the setter function so children can
      // trigger changes
      setDarkMode,
   };

   return (
      <ApolloProvider client={client}>
         <ThemeContext.Provider value={globalTheme}>
            <ThemeProvider theme={theme}>
               <div className={`App${globalTheme.darkMode ? "_dark" : ""}`}>
                  <Router>
                     <App />
                  </Router>
               </div>
            </ThemeProvider>
         </ThemeContext.Provider>
      </ApolloProvider>
   );
};

export default AppProviders;
