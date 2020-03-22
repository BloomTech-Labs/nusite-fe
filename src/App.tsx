import React, { useState } from "react";
import AppRouter from "./AppRouter";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { ThemeContext } from "./context/contexts";

const client = new ApolloClient({
   uri: "https://localhost:4000",
});

const App = (props: any) => {
   const [darkMode, setDarkMode] = useState(false);
   const theme = {
      darkMode,
      // can even pass the setter function so children can
      // trigger changes
      setDarkMode,
   };

   return (
      <ApolloProvider client={client}>
         <ThemeContext.Provider value={theme}>
            <div className={`App${theme.darkMode ? "_dark" : ""}`}>
               <AppRouter />
            </div>
         </ThemeContext.Provider>
      </ApolloProvider>
   );
};

export default App;
