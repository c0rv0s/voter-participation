import React from 'react';
import '../Styles/App.css';
import Home from './Home'
import User from './User'
import { ApolloProvider } from '@apollo/client';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>
       <div className="App">
        <Router>
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/voter-participation' render={() => <Home />} />
              <Route path={'/user/:address'} component={() => <User />} />
              <Route path="*" component={() => (<div>Not Found <Link to="/">Return to Home</Link></div>)} />
            </Switch>
        </Router>
      </div>
    </ApolloProvider>
   
  );
}

export default App;
