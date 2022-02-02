import { runHookApp } from '@forrestjs/hooks';

// Services
import reactRoot from '@forrestjs/react-root';
//import reactMUI from '@forrestjs/react-mui';
import reactRouter from '@forrestjs/react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'



import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);