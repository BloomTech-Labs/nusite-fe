import React from 'react';
import AppRouter from './AppRouter';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://localhost:4000',
});


const App = () => {
   return (
      <>
      <ApolloProvider client={client}>
      <div className="App">
         <AppRouter/>
      </div>
      </ApolloProvider>
      </>
   )};


export default App;
