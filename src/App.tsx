import React, { useState } from "react";
import AppRouter from "./AppRouter";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme"
import { ThemeContext } from "./views/context/contexts";

const client = new ApolloClient({
    uri: "https://localhost:4000",
});

const App = (props: any) => {
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
                        <AppRouter />
                    </div>
                </ThemeProvider>
            </ThemeContext.Provider>
        </ApolloProvider>
    );
};

export default App;
