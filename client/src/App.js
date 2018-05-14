import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import ErrorBoundary from "./HOC/ErrorBoundary";
// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Reading List</h1>
          <BookList />
          <ErrorBoundary>
            <AddBook />
          </ErrorBoundary>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
